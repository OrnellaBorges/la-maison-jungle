import '../styles/banner.css'
import logo from '../assets/logo.png'

function Banner(){
    return (
    
    <div className="lmj-banner">
        <img src={logo} alt = 'logo la maison jungle'></img>
        <h1>La maison jungle</h1>
    </div>
    )
}

export default Banner