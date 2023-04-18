import { withAuth } from '@/components/withAuth'
import Nav from '@/components/UserNav'
import SideBar from '@/components/SideBar'
import Script from 'next/script'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { RestApi } from '@/components/RestApi'
import { ContentGenerationValidator } from '@/components/FormValidator'

const QuillEditor = dynamic(() => import('react-quill'), {
    ssr: false
});

const Content = () => {

    const [formDisplay, setFormDisplay] = useState<boolean>(true)
    const [contentType, setContentType] = useState<string>('text')
    const [level, setLevel] = useState<number>(50)
    const [wordCount, setWordCount] = useState<number>(200)
    const [content, setContent] = useState<string>('')
    const [step, setStep] = useState<number>(1)
    const [error, setError] = useState<string | null>(null)
    const [generating, setGenerating] = useState<boolean>(false)

    const [generatedContent, setGeneratedContent] = useState<string>('')
    const handleGenerate = async () => {
        setStep(2)
        setGenerating(true)
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
                if (resp.success == 'true' && resp?.data?.generated_notes) {
                    setGeneratedContent(resp.data.generated_notes)
                    setGenerating(false)
                    setStep(3)
                    setFormDisplay(false)
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
        setGenerating(false)
    }

    const handleChange = (value: string) => {
        setGeneratedContent(value)
    }

    const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(e.target.value))
    }

    const handleWordCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWordCount(Number(e.target.value))
    }

    const handleExport = () => {
        console.log('exportiung')
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
                                    <option>2. Choose Level</option>
                                </select>
                            </div>
                            <div className="grid-item row">
                                <input type="range" min="1" max="100" className="rangeSlider" value={level} onChange={handleLevelChange} />
                                <input type="number" min="1" max="100" value={level} className="smallNumberInput" onChange={handleLevelChange} />
                            </div>
                            <div className="grid-item">
                                <select disabled>
                                    <option>3. Word Count</option>
                                </select>
                            </div>
                            <div className="grid-item row">
                                <input type="range" min="100" max="250" className="rangeSlider" value={wordCount} onChange={handleWordCountChange} />
                                <input type="number" min="100" max="250" value={wordCount} className="smallNumberInput" onChange={handleWordCountChange} />
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

                    {step >= 3 && <div style={{
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
                    </div>}
                </div>
            </div>


            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}

export default withAuth(Content)