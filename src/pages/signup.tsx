import Script from 'next/script'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from 'react'
import { RestApi } from '@/components/RestApi'
import { SignupValidator } from '@/components/FormValidator'
import { useRouter } from 'next/router'

export default function SignUp() {

    const router = useRouter()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [error, setError] = useState<string | null>(null)

    const signupHandler = async () => {
        setError(null)
        const checkForErrors = SignupValidator(firstName, lastName, email, password)
        if(!checkForErrors){
            const resp = await RestApi('/signup', {
                name: `${firstName} ${lastName}`,
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
                setError('Unexpected error occured. Please try again')
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
                    <div className="mflex" style={{ gap: '5rem', padding: '5rem', flexWrap: 'wrap' }} >
                        <div className="img-banner" style={{

                            display: 'flex',
                            justifyContent: 'center',
                            flexGrow: 2,
                        }}>
                            <div style={{ position: 'relative' }}>
                                <h3
                                    style={{ position: 'absolute', left: '2rem', color: 'white', top: '50%', transform: 'translate(0%,-50%)' }}
                                >Unlock the Power of AI for <br /> Effortless Lesson Creation</h3>
                                <img src='/images/signup.png' style={{ maxWidth: '40vw' }} />
                            </div>
                        </div>
                        <div className="formbox" style={{
                            minWidth: '30vw',
                            padding: '5rem 0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1
                        }}>
                            <h3 style={{ fontSize: '2.2rem' }}>Sign up for your free account</h3>
                            {error && <p className='error'>{error}</p>}
                            <div>
                                <input type='text' placeholder='First name' className='text-input half-input'
                                onChange={(e) => setFirstName(e.target.value)} />
                                &nbsp;&nbsp;&nbsp;
                                <input type='text' placeholder='Last name' className='text-input half-input' 
                                onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div>
                                <input type='email' placeholder='Email address' className='text-input full-input' 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <input type='password' placeholder='Create Password' className='text-input full-input' 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div>
                                <button type='button' className='button' style={{ background: '#2B62E7 ' }}
                                    onClick={signupHandler}>
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}
