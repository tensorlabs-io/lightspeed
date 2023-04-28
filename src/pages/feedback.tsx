import Script from 'next/script'
import Nav from '../components/UserNav'
import SideBar from '../components/SideBar'
import FeedbackIcon from '@mui/icons-material/Feedback'
import React, { useState } from 'react'
import { RestApi } from '../components/RestApi'
import { FeedbackValidator } from '../components/FormValidator'

const Feedback = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [title, setTitle] = useState<string>()
    const [message, setMessage] = useState<string>()
    const [name, setName] = useState<string>()
    const [fromEmail, setFromEmail] = useState<string>()

    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const handleFeedback = async () => {
        setLoading(true)
        setError(null)
        const checkForErrors = FeedbackValidator(title, message, name, fromEmail)
        if(!checkForErrors){
            const resp = await RestApi('/feedback', {
                title: title,
                text: message,
                name: name,
                from: fromEmail
            })
            console.log('api response', resp)
            if (resp && resp?.success) {
                if (resp.success == 'true') {
                    setTitle('')
                    setMessage('')
                    setName('')
                    setFromEmail('')
                    setSuccess('Thanks for your feedback!')
                } else {
                    setError(resp?.message || 'Unexpected error occured while sending feedback. Please try again!')
                }
            } else {
                setError('Unexpected error occured while sending feedback. Please try again!')
            }
        }else{
            setError(checkForErrors)
        }
        setLoading(false)
    }

    return (
        <>
            <Nav />
            <div className="wrapper userWrapper">
                <SideBar />
                <div className="contentBox">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <h3 className="contentHeading"> Feedback </h3>
                        <FeedbackIcon className='hide-on-mobile' style={{ fontSize: '3rem', paddingBottom: '10px' }} />
                    </div>
                    <div style={{
                        width: '100%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '2rem',
                        padding: '0',
                    }}>

                        {error != null && <p className='error'>{error}</p>}
                        {success != null && <p className='success'>{success}</p>}
                        <input type='text' placeholder='Full Name' className='text-input full-input'
                            value={name} onChange={(e) => setName(e.target.value)} />

                        <input type='email' placeholder='Your Email' className='text-input full-input'
                            value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} />

                        <input type='text' placeholder='Title / Subject' className='text-input full-input'
                            value={title} onChange={(e) => setTitle(e.target.value)} />

                        <textarea placeholder='Message' className='text-input full-input'
                            style={{ width: '100%', height: '20vh !important', resize: 'none' }}
                            value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>

                        <button disabled={loading} onClick={handleFeedback} style={{ alignSelf: 'flex-end' }} 
                        className={`contentBtn${loading ? ' generating' : ''}`}>Send Feedback</button>
                    </div>

                    { loading && <div style={{ 
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
                            <div className="loader-text">Sending Feedback</div>
                        </div>
 
                    </div>}
                </div>
            </div>


            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}

export default Feedback