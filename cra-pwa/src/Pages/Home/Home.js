import Textfield from './Textfield'
import Dropdown from './Dropdown'
import './Home.css'
import Categories from '../../Data/Categories'
import { MenuItem } from '@material-ui/core'

const Home = () => {
    return (
        <div className='content'>
            <div className="settings">
                <span style={{ color: 'white', fontSize: 30 }}>Quiz Settings</span>
                <div className='settings__select'>
                    <Textfield />
                    <Dropdown />
                    
                    
                </div>
            </div>

            <img src='/quiz.svg' className="banner" alt="quiz"/>
            
        </div>
    )
}

export default Home
