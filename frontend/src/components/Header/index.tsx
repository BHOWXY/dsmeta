import Logo from '../../assets/img/logo.png'
import './styles.css'

function Header() {
    return (
        <header>


        <div className="dsmeta-logo-container">
            <img src={Logo} alt="Logo"/>
            <h1></h1>    
        </div>
        </header> 
    )
  }

  export default Header
  