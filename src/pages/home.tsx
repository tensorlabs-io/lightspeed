import Script from 'next/script'
import Nav from '../components/UserNav'
import SideBar from '../components/SideBar'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { withAuth } from '@/components/withAuth'

const Home = () =>  {
    return (
        <>
            <Nav />
            <div className="wrapper userWrapper">
                <SideBar />
                <div className="contentBox">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center'}}>
                        <h3 className="contentHeading"> Choose a type of creation </h3>
                        <NoteAddIcon className='hide-on-mobile' style={{fontSize: '3rem', paddingBottom: '10px'}} />
                    </div>
                    <div style={{
                        width: '80%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        height: '40vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        <a href="/content" className="contentBtn">Content Creation</a>
                        <a href="/assessment" className="contentBtn">Assessment Creation</a>
                    </div>
                </div>
            </div>


            <Script src="template.js" type="text/javascript"></Script>

        </>
    )
}

export default withAuth(Home)