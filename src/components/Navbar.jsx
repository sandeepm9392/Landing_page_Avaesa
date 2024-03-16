import React, { useState } from 'react'
import brand from "../assets/pixeden.png"
import menu_icon from "../assets/text.png"
import { useEffect } from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setNavbar(true) : setNavbar(false);
        })
    })
    const [toggle, setToggle] = useState(false)

    const handleMenu = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    const handleMenu2 = () => {
        toggle ? setToggle(true) : setToggle(false)
    }

    return (
        <nav class={`${navbar ? 'nav-bar' : ""}`}>
            <div className="wrapper">
                <img src={brand} alt="brand logo" />
                <ul className={toggle ? '' : 'hide-menu'}>
                    <li><Link to='main' smooth={true} offset={0} duration={500} >Home</Link></li>
                    <li><Link to='imgcontainer' smooth={true} offset={-200} duration={500} >Aboutme</Link></li>
                    <li><Link to='courses' smooth={true} offset={-190} duration={500} >Course</Link></li>
                    <li><Link to='program' smooth={true} offset={-190} duration={500} >Program</Link></li>
                    <li><Link to='testimonial' smooth={true} offset={-50} duration={500} >Reviews</Link></li>
                    <li ><Link to='connect' smooth={true} offset={-200} duration={500}><button class="navbar btn">Contact us</button></Link></li>
                </ul>
                <img src={menu_icon} alt="" className="menu-icon" onClick={handleMenu} />
            </div>

        </nav>
    )
}

export default Navbar