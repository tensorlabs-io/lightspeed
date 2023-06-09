import { withAuth } from '@/components/withAuth'
import Nav from '@/components/UserNav'
import SideBar from '@/components/SideBar'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { RestApi } from '@/components/RestApi'
import { ContentGenerationValidator } from '@/components/FormValidator'
import { useRouter } from 'next/router'
import ReactToPrint from 'react-to-print'
import Feedback from '@/components/Feedback'
import UserFooter from '@/components/UserFooter'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'



const QuillEditor = dynamic(() => import('react-quill'), {
    ssr: false,
});

const Content = () => {

    const printableRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const [showMaterial, setShowMaterial] = useState(true)
    const [showLevel, setShowLevel] = useState(true)
    const [showWordCount, setShowWordCount] = useState(true)

    const [formDisplay, setFormDisplay] = useState<number>(2)
    const [displayIncrement, setDisplayIncrement] = useState<number>(-11);
    useEffect(() => {
        if (formDisplay >= 2) {
            setDisplayIncrement(-1)
        } else if (formDisplay <= 0) {
            setDisplayIncrement(1)
        }
    }, [formDisplay])

    const [contentType, setContentType] = useState<string>('text')
    const [level, setLevel] = useState<number>(50)
    const [wordCount, setWordCount] = useState<number>(200)
    const [content, setContent] = useState<string>('')
    const [step, setStep] = useState<number>(1)
    const [error, setError] = useState<string | null>(null)

    const [generateStatus, setGenerateStatus] = useState<string | null>(null)
    const [exporting, setExporting] = useState<string | null>(null)

    const [generatedContent, setGeneratedContent] = useState<string>('')
    const [pgc, setPgc] = useState<string>('')
    const handleGenerate = async () => {
        setStep(2)
        setGenerateStatus('Generating Content..')
        setError(null)

        const checkForErrors = ContentGenerationValidator(
            content,
            contentType,
            level,
            wordCount,
        )
        if (!checkForErrors) {
            const resp = await RestApi('/generate_notes', {
                user_text: content,
                model: 'gpt3.5turbo',
                word_count: wordCount,
                level: level

            })
            console.log(resp)
            if (resp && resp?.success) {
                if (resp.success == 'true' && resp?.data?.generated_notes?.length) {

                    const process_notes = resp.data.generated_notes
                        .split('\n')
                        .map((para: string) => `<p">${para}<br></p>`)
                        .join('');

                    setGeneratedContent(process_notes)
                    setPgc(resp.data.generated_notes)
                    setGenerateStatus(null)
                    setStep(3)
                    setFormDisplay(0)
                    return
                } else {
                    setError(resp?.message || 'Unexpected error occured. Please try again')
                }
            } else {
                setError('Unexpected error occured. Please try again')
            }
        } else {
            setError(checkForErrors)
        }

        setStep(1)
        setGenerateStatus(null)
    }

    const handleChange = (value: string) => {
        console.log('changed', value)
        setGeneratedContent(value)
    }

    const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(e.target.value))
    }

    const handleWordCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWordCount(Number(e.target.value))
    }

    const handleExport = async () => {
        setStep(5)
        setExporting('Exporting to pdf...')
        try {
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
        } catch (e: any) {
            console.log(e)
            setError('Unexpected error occured while exporting')
        }
        setExporting(null)
    }

    const createAssessment = () => {
        router.push({
            pathname: '/assessment',
            query: { pgc: pgc },
        });
    }


    return (
        <>
            <Nav />
            <div className="wrapper userWrapper" >
                <SideBar>
                    <span className={`${step == 1 ? 'active ' : ''}button w-button`}>
                        Select Input
                    </span>
                    <span className={`${step == 2 ? 'active ' : ''}button w-button`}>
                        Generate Input
                    </span>
                    <span className={`${step == 3 ? 'active ' : ''}button w-button`}>
                        Edit the document
                    </span>
                    <span className={`${step == 4 ? 'active ' : ''}button w-button`}>
                        Save & Review
                    </span>
                    <span className={`${step == 5 ? 'active ' : ''}button w-button`}>
                        Export & Print Out
                    </span>
                    <span className={`${step == 6 ? 'active ' : ''}button w-button`}>
                        Voila!
                    </span>
                </SideBar>
                <div className="contentBox">
                    <h1 style={{ color: '#539BF9', fontWeight: '700' }}>{step < 4 ? 'Content Creator': 'Review'}</h1><br /><br />
                    {step <= 3 && <>
                        <div className="formBox" style={{ paddingBottom: '2rem' }}>
                            <img src="/images/reselect.svg" className="abs-icon" onClick={(e) => setFormDisplay(formDisplay + displayIncrement)} />

                            <div className="grid-container">

                                <div className="grid-item" style={{ display: formDisplay > 0 ? 'block' : 'none' }}>
                                    <div className="formToggle" onClick={(e) => { e.preventDefault(); setShowMaterial(!showMaterial) }}>
                                        <span>1. Select Material</span>
                                        {showMaterial ? <ArrowDropDownIcon />: <ArrowRightOutlinedIcon/>}
                                    </div>
                                </div>
                                {showMaterial && formDisplay > 1 ? <div className="grid-item row" style={{ padding: 0, display: formDisplay > 1 ? 'block' : 'none' }}>
                                    <div style={{
                                        background: 'white',
                                        padding: '20px',
                                        position: 'relative',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        <div className="input-type" style={{
                                            display: 'flex',
                                            gap: '20px',
                                            alignItems: 'center',
                                            background: 'white',
                                            padding: '0px 12px',
                                            position: 'absolute',
                                            top: '30px',
                                            left: '40px',
                                            transform: 'translate(10%, -55%) scale(1.2)',

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
                                                height: '30vh',
                                                padding: '30px 15px',
                                                resize: 'none',
                                            }}
                                            placeholder={contentType === 'text' ? 'Copy and paste text or type passages' : 'Enter a comma after each keyword.\nex) Osaka, Ramen, Nissin'}
                                            onChange={(e) => setContent(e.target.value)}
                                        >
                                        </textarea>

                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            gap: '10px',
                                        }}>
                                            <img className="imgIcon" src="/images/book.svg" />
                                            <img className="imgIcon" src="/images/paperClip.svg" />
                                        </div>
                                    </div>
                                </div> : <div className="grid-item row"></div>}
                                <div className="grid-item" style={{ display: formDisplay > 0 ? 'block' : 'none' }}>
                                    <div className="formToggle" onClick={(e) => { e.preventDefault(); setShowLevel(!showLevel) }}>
                                        <span>2. Choose Level</span>
                                        {showLevel ? <ArrowDropDownIcon />: <ArrowRightOutlinedIcon/>}
                                    </div>
                                </div>
                                {showLevel && formDisplay > 1 ? <div className="grid-item row" style={{ justifyContent: 'stretch', display: formDisplay > 1 ? 'flex' : 'none' }}>
                                    <div style={{ width: '40%', textAlign: 'left' }}>
                                        <input type="range" min="1" max="100" className="rangeSlider" value={level} onChange={handleLevelChange} />
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'left', display: formDisplay > 0 ? 'block' : 'none' }}>
                                        <input type="number" min="1" max="100" value={level} className="smallNumberInput" onChange={handleLevelChange} />
                                    </div>
                                </div> : <div className="grid-item row"></div>}
                                
                                <div className="grid-item" style={{ display: formDisplay > 0 ? 'block' : 'none' }}>
                                    <div className="formToggle" onClick={(e) => { e.preventDefault(); setShowWordCount(!showWordCount) }}>
                                        <span>3. Word Count</span>
                                        {showWordCount ? <ArrowDropDownIcon />: <ArrowRightOutlinedIcon/>}
                                    </div>
                                </div>
                                {showWordCount && <div className="grid-item row" style={{ justifyContent: 'stretch', display: formDisplay > 1 ? 'flex' : 'none' }}>
                                    <div style={{ width: '40%', textAlign: 'left' }}>
                                        <input type="range" min="100" max="350" className="rangeSlider" value={wordCount} onChange={handleWordCountChange} />
                                    </div>
                                    <div style={{ width: '50%', textAlign: 'left' }}>
                                        <input type="number" min="100" max="350" value={wordCount} className="smallNumberInput" onChange={handleWordCountChange} />
                                    </div>
                                </div>}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem' }}>
                                <button
                                    className={`contentBtn${generateStatus != null ? ' generating' : ''}`}
                                    onClick={handleGenerate}
                                    disabled={generateStatus != null}
                                    style={{ transform: 'translate(-10%,-10%) scale(0.8)'}}
                                >
                                    {generateStatus != null ? 'Generating...' : 'Generate'}
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
                                style={{ height: '800px', maxWidth: '95vw' }}
                            />

                        </div>
                    </>}

                    {step >= 4 && <>

                        <div className='contentBtns' style={{ marginBottom: '2rem' }}>
                            <img className="icon"
                                onClick={handleExport}
                                alt="Export" src="/images/export.svg" />
                            <ReactToPrint
                                trigger={() => <img src="/images/print.svg" alt="Print"
                                    className="icon" />}
                                content={() => printableRef.current}
                            />

                        </div>
                        <div className="reviewContent" ref={printableRef} dangerouslySetInnerHTML={{ __html: generatedContent }}></div>
                        <div style={{
                            marginBottom: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            marginTop: '2rem',
                            gap: '1.5rem',
                        }}>
                            <div><button
                                className='contentBtn'
                                style={{ padding: '0', width: '32rem', height: '4rem' }}
                                onClick={createAssessment}>
                                Create New Assessment with the Content
                            </button></div>
                            <div className='contentBtns'>
                                <button
                                    className='contentBtn'
                                    style={{ padding: '0', width: '15rem', height: '4rem', background: 'white', color: '#539BF9', border: '2px solid #539BF9', textShadow: 'none' }}
                                    onClick={() => setStep(3)}>

                                    Back to Editing
                                </button>
                                <button
                                    className='contentBtn'
                                    style={{ padding: '0', width: '15rem', height: '4rem', background: 'white', color: '#539BF9', border: '2px solid #539BF9', textShadow: 'none' }}
                                    onClick={() => router.push('/home')}>
                                    Go to HOME
                                </button>
                            </div>
                        </div>
                    </>}

                    {step == 3 && <div className="contentBtns" style={{ marginBottom: '2rem', marginTop: '4rem' }}>
                        <button
                            className='contentBtn'
                            onClick={() => setStep(4)}>
                            Save & Review
                        </button>
                    </div>}



                    {(generateStatus != null || exporting != null) && <div style={{
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
                                {generateStatus || exporting}</div>
                        </div>

                    </div>}


                </div>
            </div>

            <Feedback />
            <UserFooter />
            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}

export default withAuth(Content)