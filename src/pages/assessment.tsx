import { withAuth } from '@/components/withAuth'
import Nav from '@/components/UserNav'
import SideBar from '@/components/SideBar'
import Script from 'next/script'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { RestApi } from '@/components/RestApi'
import { AssessmentGenerationValidator } from '@/components/FormValidator'

const QuillEditor = dynamic(() => import('react-quill'), {
    ssr: false
});

const Assessment = () => {


    const [questionType, setQuestionType] = useState<string>('mcq')

    const [formDisplay, setFormDisplay] = useState<boolean>(true)
    const [contentType, setContentType] = useState<string>('text')
    const [numQuestions, setNumQuestions] = useState<number>(20)

    const [content, setContent] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [generating, setGenerating] = useState<boolean>(false)

    const [generatedContent, setGeneratedContent] = useState<string>('')
    const handleGenerate = () => {
        setGenerating(true)
        setError(null)

        const checkForErrors = AssessmentGenerationValidator(
            content,
            contentType,
            numQuestions,
            questionType
        )
        if (!checkForErrors) {

            generateQuestions('/questionnaire/'+questionType, numQuestions, 3)

        } else {
            setError(checkForErrors)
            setGenerating(false)
        }

        
    }

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

    const parseData = (data: string, endpoint: string):string => {
        try{
            const jsonData = JSON.parse(data)
            if(endpoint == '/questionnaire/mcqs') {
                return parseMcqs(jsonData)
            }else if(endpoint == '/questionnaire/comprehensive'){
                return parseComprehensive(jsonData)
            }else if(endpoint == '/questionnaire/true_false'){
                return parseTrueFalse(jsonData)
            }else if(endpoint == '/questionnaire/fillinblanks'){
                return parseFillInBlanks(jsonData)
            }

            return ''
        } catch (e) {
            return ''
        }

    }

    const generateQuestions = async (endpoint: string, numofquestions: number, numOfOptions: number | null = null) => {
        
        type Data = {
            user_text: string;
            model: string;
            numofquestions: number;
            numofoptions?: number;
        }

        const data: Data = {
            user_text: content,
            model: 'gpt3.5turbo',
            numofquestions,
        }

        if (numOfOptions) {
            data['numofoptions'] = numOfOptions
        }

        const resp = await RestApi(endpoint, data)
        if (resp && resp?.success) {
            if (resp.success == 'true' && resp?.data?.questions) {
                console.log(resp)
                const html = parseData(resp.data.questions, endpoint)
                if(html != ''){
                    setGeneratedContent(html)
                }else{
                    setError('Unexpected error occured while parsing output from GPT')
                }
            } else {
                setError(resp?.message || 'Unexpected error occured. Please try again')
            }
        } else {
            setError('Unexpected error occured. Please try again')
        }

        
        setGenerating(false)
        
    }

    const handleChange = (value: string) => {
        setGeneratedContent(value)
    }

    const handleNumQuestionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumQuestions(Number(e.target.value))
    }


    const handleExport = () => {
        console.log('exporting')
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
                                    width: '100%'
                                }}>
                                    <div style={{
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
                                    <option>2. Number of questions</option>
                                </select>
                            </div>
                            <div className="grid-item row">
                                <input type="range" min="1" max="20" className="rangeSlider" value={numQuestions} onChange={handleNumQuestionsChange} />
                                <input type="number" min="1" max="20" value={numQuestions} className="smallNumberInput" onChange={handleNumQuestionsChange} />
                            </div>
                            <div className="grid-item">
                                <select disabled>
                                    <option>2. Question Types</option>
                                </select>
                            </div>
                            <div className="grid-item column" style={{ gap: '5px' }}>
                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    <input 
                                        type="radio" 
                                        name="question_type"
                                        value='mcqs' 
                                        checked={questionType === 'mcqs'} 
                                        onChange={() => setQuestionType('mcqs')} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}> Multiple Choice Questions</label>
                                    {/* <input type="number" min="1" max="20" className="smallNumberInput" value={amountMcq} onChange={(e) => setAmountMcq(Number(e.target.value))} /> */}
                                </div>

                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    <input 
                                        type="radio" 
                                        name="question_type"
                                        value='true_false'
                                        checked={questionType === 'true_false'} 
                                        onChange={() => setQuestionType('true_false')} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}>True or False</label>
                                    {/* <input type="number" min="1" max="20" className="smallNumberInput" value={amountTrueFalse} onChange={(e) => setAmountTrueFalse(Number(e.target.value))} /> */}
                                </div>


                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    <input 
                                        type="radio"
                                        name="question_type"
                                        value='fillinblanks'
                                        checked={questionType === 'fillinblanks'} 
                                        onChange={() => setQuestionType('fillinblanks')} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}>Fill in the Blank</label>
                                    {/* <input type="number" min="1" max="20" className="smallNumberInput" value={amountBlanks} onChange={(e) => setAmountBlanks(Number(e.target.value))} /> */}
                                </div>

                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    <input 
                                        type="radio"
                                        name="question_type"
                                        checked={questionType === 'comprehensive'} 
                                        onChange={() => setQuestionType('comprehensive')} 
                                    />
                                    <label style={{ width: '250px', textAlign: 'left' }}>Comprehensive Questions</label>
                                    {/* <input type="number" min="1" max="20" className="smallNumberInput" value={amountComprehensive} onChange={(e) => setAmountComprehensive(Number(e.target.value))} /> */}
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '3rem', paddingTop: '2rem' }}>
                            <button
                                className={`contentBtn${generating ? ' generating' : ''}`}
                                onClick={handleGenerate}
                                disabled={generating}
                            >
                                {generating ? 'Generating Content....' : 'Generate'}
                            </button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '4rem' }}>
                            {error && <p className='error'>{error}</p>}
                        </div>

                    </div>

                    <div className="DC" style={{ marginTop: '30px' }}>
                        <QuillEditor
                            value={generatedContent}
                            onChange={handleChange}
                            style={{ height: '800px' }}
                        />

                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '3rem',
                        marginTop: '4rem',
                    }}>
                        <button
                            className='contentBtn'>
                            Save & Review
                        </button>

                        <button
                            className='contentBtn'
                            onClick={handleExport}
                        >
                            Export as PDF
                        </button>
                    </div>
                </div>
            </div>


            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}

export default withAuth(Assessment)