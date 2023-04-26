import Script from 'next/script'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from 'react'
import { RestApi } from '@/components/RestApi'
import { LoginValidator } from '@/components/FormValidator'
import { useRouter } from 'next/router'

export default function Login() {

    const router = useRouter()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [error, setError] = useState<string | null>(null)

    const loginHandler = async () => {
        setError(null)
        const checkForErrors = LoginValidator(email, password)
        if(!checkForErrors){
            const resp = await RestApi('/login', {
                email,
                password,
            })

            if(resp && resp?.success) {
                if(resp.success == 'true' && resp?.data?.auth_token){
                    localStorage.setItem('authToken', resp.data.auth_token)
                    localStorage.setItem('name', resp.data.name)
                    router.push('/home')
                }else{
                    setError(resp?.message || 'Unexpected error occured. Please try again')
                }
            }else{
                setError('Unexpected error occured. Please try again.')
            }
        }else{
            setError(checkForErrors)
        }
    }
    return (
        <>
            <Nav />
            <div className="wrapper" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="section wf-section" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div className="mflex" style={{ gap: '5rem', padding: '5rem', flexWrap: 'wrap-reverse' }} >

                        <div className="formbox" style={{
                            minWidth: '30vw',
                            padding: '5rem 0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: '1'
                        }}>
                            <h3 style={{ fontSize: '2.2rem' }} >Welcome Back</h3>
                            {error && <p className='error'>{error}</p>}
                            <div>
                                <input type='email' placeholder='Email address' className='text-input full-input' 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <input type='password' placeholder='Password' className='text-input full-input' 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div>
                                <button type='button' className='button' style={{ background: '#2B62E7 ' }}
                                onClick={loginHandler}>Login</button>
                            </div>
                        </div>
                        <div className="img-banner hide-on-mobile" style={{

                            display: 'flex',
                            justifyContent: 'center',
                            flexGrow: 2,
                        }}>
                            <img src='/images/login.png' style={{ maxWidth: '40vw' }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}
