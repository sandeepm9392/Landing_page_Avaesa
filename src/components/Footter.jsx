import React from 'react'
import brand from "../assets/pixeden.png"
const Footter = () => {
  return (
    <div className="footer">
        <div className="left">
            <img src={brand} alt="" />
            <p>© 2024 Landing page for Arun-Journalist<br/>
            Made by Sandeep Muthyala</p>
        </div>
        <div className="right">
            <ul>
                <li className="footer-tag">Info</li>
                <li>About</li>
                <li>Initiatives</li>
                <li>Media</li>
            </ul>
            <ul>
                <li className="footer-tag">Business</li>
                <li>Media</li>
                <li>Rights</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Footter