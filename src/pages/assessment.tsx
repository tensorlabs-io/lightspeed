import { withAuth } from '@/components/withAuth'
import Nav from '@/components/UserNav'
import SideBar from '@/components/SideBar'
import Script from 'next/script'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { RestApi } from '@/components/RestApi'
import { AssessmentGenerationValidator } from '@/components/FormValidator'
import { useRouter } from 'next/router'

const QuillEditor = dynamic(() => import('react-quill'), {
    ssr: false
});

const Assessment = () => {

    const router = useRouter();
    const { pgc } = router.query
   
    const [createMcq, setCreateMcq] = useState<number | null>(null)
    const [createTrueFalse, setCreateTrueFalse] = useState<number | null>(null)
    const [createFillInBlanks,setCreateFillInBlanks] = useState<number | null>(null)
    const [createComprehensive, setCreateComprehensive] = useState<number | null>(null)


    const [formDisplay, setFormDisplay] = useState<boolean>(true)
    const [contentType, setContentType] = useState<string>('text')
    const [numQuestions, setNumQuestions] = useState<number>(20)

    const [content, setContent] = useState<any>(pgc)
    const [error, setError] = useState<string | null>(null)

    const [generateStatus, setGenerateStatus] = useState<string|null>(null)
    const [exporting, setExporting] = useState<string | null>(null)

    const [generatedContent, setGeneratedContent] = useState<string>('')

    
    const parseMcqOptions = (options: Record<string,string> | Array<string>):string => {

        if (Array.isArray(options)) {
            return options.map((option, i) => `<li>${i+1}) ${option}</li>`).join("")
        } else if (typeof options === 'object' && options !== null) {
            return Object.values(options).map((option, i) => `<li>${i+1}) ${option}</li>`).join("")
        } else {
            throw Error()
        }
    }

    const parseMcqs = (jsonData:Record<string , any>):string => {
        try {
            if(!jsonData.questions.length){
                return ''
            }
            let html = '<h1><u>Choose the best answer:</u></h1><br/><br/>'
            jsonData.questions.map( (entry: any,i:number) => {
                const options = parseMcqOptions(entry.options)
                
                html += `
                
                <h3>${i+1}) ${entry.question} </h3><br/>
                ${options}
                <br/>
                `
                
            })
            return html
        } catch (e) {
            return ''
        }
    }

    const parseTrueFalse = (jsonData:Record<string , any>):string => {
        try {
            if(!jsonData.questions.length){
                return ''
            }
            let html = '<h1><u>True or False?:</u></h1><br/><br/>'
            jsonData.questions.map( (entry: any,i:number) => {
                // const options = parseMcqOptions(entry.options)
                
                html += `
                
                <h3>${i+1}) ${entry.question
                                .replace('True or False: ', '')
                                .replace('True or False:', '')
                                .replace('True or False', '')
                                .replace('True/False: ', '')
                            } </h3><br/>
                <ul><li>True</li><li>False</li></ul>
                <br/>
                `
                
            })
            return html
        } catch (e) {
            return ''
        }
    }

    const parseFillInBlanks = (jsonData:Record<string , any>):string => {
        try {
            if(!jsonData.questions.length){
                return ''
            }
            let html = '<h1><u>Fill in the blanks:</u></h1><br/><br/>'
            jsonData.questions.map( (entry: any,i:number) => {
                
                html += `
                
                <h3>${i+1}) ${entry.question.replace('%BLANK%', '____________')} </h3><br/>
                <br/>
                `
                
            })
            return html
        } catch (e) {
            return ''
        }
    }
    
    const parseComprehensive = (jsonData:Record<string, any>):string => {
        try {
            if(!jsonData.questions.length){
                return ''
            }
            let html = '<h1><u>Comprehensive Question Answers:</u></h1><br/><br/>'
            jsonData.questions.map( (entry: any, i:number) => {
                
                html += `
                
                <h3>Q${i+1}) ${entry.question} </h3><br/>
                <br/><br/>
                `
                
            })
            return html
        } catch (e) {
            return ''
        }
    }

    const handleGenerate = async () => {
        setGenerateStatus('Generating Assessment..')
        setError(null)
        const createQuestionsArray = [createMcq, createTrueFalse, createFillInBlanks, createComprehensive]
        const checkForErrors = AssessmentGenerationValidator(
            content,
            contentType,
            numQuestions,
            createQuestionsArray
        )
        if (!checkForErrors) {

            type Data = {
                user_text: string;
                model: string;
                true_false: number;
                fill_in_the_blanks: number;
                comprehensive_questions: number;
                multiple_choice_questions: number;
            }
    
            const data: Data = {
                user_text: content,
                model: 'gpt3.5turbo',
                true_false: createTrueFalse || 0,
                fill_in_the_blanks: createFillInBlanks || 0,
                comprehensive_questions: createComprehensive || 0,
                multiple_choice_questions: createMcq || 0,
            }

    
            const resp = await RestApi('/alltypes', data)
            console.log('api response', resp)
            if (resp && resp?.success) {
                if (resp.success == 'true') {
                    let html = ''
                    const data = resp.data
                    if(createMcq) {
                        html += parseMcqs(data?.multiple_choice_questions?.[0])
                    }

                    if(createComprehensive) {
                        html += parseComprehensive(data?.comprehensive_questions?.[0])
                    }

                    if(createFillInBlanks) {
                        html += parseFillInBlanks(data?.fill_in_the_blanks)
                    }

                    if(createTrueFalse) {
                        html += parseTrueFalse(data?.true_false?.[0])
                    }

                    setGeneratedContent(html)
                    
                } else {
                    setError(resp?.message || 'Unexpected error occured. Please try again')
                }
            } else {
                setError('Unexpected error occured. Please try again')
            }
            setGenerateStatus(null)
        } else {
            setError(checkForErrors)
            setGenerateStatus(null)
        }

        
    }

    const handleChange = (value: string) => {
        setGeneratedContent(value)
    }


    const handleExport = async () => {
        setExporting('Exporting to pdf...')
        const res = await fetch('/api/export-pdf', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: generatedContent }),
        });
    
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement('a');
        link.href = url;
        link.download = 'export.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setExporting(null)
    }

    return (
        <>
            <Nav />
            <div className="wrapper userWrapper" >
                <SideBar />
                <div className="contentBox">

                    <div className="formBox" style={{ paddingBottom: '2rem' }}>
                        <img src="/images/edit.png" className="abs-icon" onClick={(e) => setFormDisplay(!formDisplay)} />

                        <div className="grid-container" style={{ display: formDisplay ? 'grid' : 'none' }}>

                            <div className="grid-item">
                                <select disabled>
                                    <option>1. Select Material</option>
                                </select>
                            </div>
                            <div className="grid-item col">
                                <div style={{
                                    background: 'white',
                                    padding: '30px',
                                    position: 'relative',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>
                                    <div className="input-type" style={{
                                        display: 'flex',
                                        gap: '20px',
                                        alignItems: 'center',
                                        background: 'white',
                                        padding: '0px 12px',
                                        position: 'absolute',
                                        top: '30px',
                                        left: '30px',
                                        transform: 'translate(10%, -45%)'
                                    }}>

                                        <input
                                            type="radio"
                                            name="input_type"
                                            value='keyword'
                                            checked={contentType === 'keyword'}
                                            onChange={(e) => setContentType(e.target.value)}
                                        />
                                        <label>Type keyword</label>
                                        <input
                                            type="radio"
                                            name="input_type"
                                            value='text'
                                            checked={contentType === 'text'}
                                            onChange={(e) => setContentType(e.target.value)}
                                        />
                                        <label>Insert text</label>
                                    </div>

                                    <textarea
                                        style={{
                                            width: '100%',
                                            height: '20vh',
                                            padding: '15px',
                                            resize: 'none',
                                        }}
                                        value={content}
                                        placeholder={contentType === 'text' ? 'Enter text material' : 'Enter comma seperated keywords'}
                                        onChange={(e) => setContent(e.target.value)}
                                    >
                                    </textarea>

                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        gap: '10px',
                                        paddingTop: '6px'

                                    }}>
                                        <img className="imgIcon" src="/images/copy.png" />
                                        <img className="imgIcon" src="/images/paperclip.png" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid-item">
                                <select disabled>
                                    <option>2. Question Types</option>
                                </select>
                            </div>
                            <div className="grid-item" style={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={createMcq!=null}
                                        value='mcqs' 
                                        onChange={() => setCreateMcq( (createMcq!=null)?null:5 )} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}> Multiple Choice Questions</label>
                                    <input type="number" min="1" max="20" className="smallNumberInput" value={createMcq || 0} onChange={(e) => setCreateMcq(Number(e.target.value))} />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={createTrueFalse!=null}
                                        value='true_false' 
                                        onChange={() => setCreateTrueFalse( (createTrueFalse!=null)?null:5 )} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}>True or False</label>
                                    <input type="number" min="1" max="20" className="smallNumberInput" value={createTrueFalse || 0} onChange={(e) => setCreateTrueFalse(Number(e.target.value))} />
                                </div>


                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={createFillInBlanks!=null}
                                        value='fillinblank' 
                                        onChange={() => setCreateFillInBlanks( (createFillInBlanks!=null)?null:5 )} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}>Fill in the Blank</label>
                                    <input type="number" min="1" max="20" className="smallNumberInput" value={createFillInBlanks || 0} onChange={(e) => setCreateFillInBlanks(Number(e.target.value))} />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={createComprehensive!=null}
                                        value='comprehensive' 
                                        onChange={() => setCreateComprehensive( (createComprehensive!=null)?null:5 )}
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}>Comprehensive Questions</label>
                                    <input type="number" min="1" max="20" className="smallNumberInput" value={createComprehensive || 0} onChange={(e) => setCreateComprehensive(Number(e.target.value))} />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem', paddingTop: '2rem' }}>
                            <button
                                className={`contentBtn${generateStatus!=null ? ' generating' : ''}`}
                                onClick={handleGenerate}
                                disabled={generateStatus!=null}
                            >
                                {generateStatus!=null ? 'Generating...' : 'Generate'}
                            </button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '4rem' }}>
                            {error && <p className='error'>{error}</p>}
                        </div>

                    </div>

                    <div className="DC" style={{ marginTop: '30px', marginBottom: '3rem' }}>
                        <QuillEditor
                            value={generatedContent}
                            onChange={handleChange}
                            style={{ height: '800px' }}
                        />

                    </div>

                    <div className='contentBtns'>
                       
                        <button
                            className={`contentBtn${exporting!=null ? ' generating' : ''}`}
                            onClick={handleExport}
                            disabled={exporting!=null}
                        >
                            {exporting!=null ? 'Generating...' : 'Export as PDF'}
                        </button>
                    </div>


                    { (generateStatus!=null || exporting!=null) && <div style={{ 
                        position: 'fixed',
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: '10',
                        top: '0',
                        bottom: '0',
                        right: '0',
                        left: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10%',
                    }}>

                        <div className="loader">
                            <div className="loader-wheel"></div>
                            <div className="loader-text">
                                { generateStatus || exporting }</div>
                        </div>
 
                    </div>}
                </div>
            </div>


            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}


export default withAuth(Assessment)