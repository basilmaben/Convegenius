import Textfield from './Textfield'
import Dropdown from './Dropdown'
import './Home.css'
const Home = () => {
    return (
        <div className='content'>
            <div className="settings">
                <span style={{ color: 'white', fontSize: 30 }}>Quiz Settings</span>
                <div className='settings__select'>
                    <Textfield />
                    <Dropdown/>
                </div>
            </div>

            <img src='/quiz.svg' className="banner" alt="quiz"/>
            
        </div>
    )
}

export default Home
