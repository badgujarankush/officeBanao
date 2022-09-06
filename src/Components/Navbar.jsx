import React, { useState } from 'react'
import '../Styles/Navbar.css'
import logo from '../images/logo.svg';
import faq from '../images/faq.svg';
import support from '../images/support.svg';
import profile from '../images/profile.png';
import logout from '../images/logout.svg';
import brandName from '../images/brandName.png';


const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick =()=>{
        setActive(!active);
    }
  return (
    <div  className={active ? "nav active" : "nav"} onClick={handleClick}>

        <div className='head'>
            <div className='logo'><img src={logo} alt = "officeBanao"/></div>
            {active && <img id="brandName" src={brandName} alt="officebanao"/>}
        </div>

        {/* <div className='links'> */}
            <ul className='list'>
                <li className='listItem'>
                    <img src={faq} alt="faq"/>
                    {active && <p>FAQs</p>}
                </li>

                <li className='listItem'>
                    <img src={support} alt="support"/>
                    {active && <p>Support</p>}
                
                </li>

                <li className='listItem'>
                    <img id="profile" src={profile} alt="avatar"/>
                    {active && <p>Ankush</p>}
                    
                </li>
            </ul>

            
        {/* </div> */}
        <img id="logout" src={logout} alt='logout'/>
    </div>
  )
}

export default Navbar;