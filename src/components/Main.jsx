import React from 'react'
import journalist from '../assets/journalist_0.png'
import { Link } from 'react-scroll'
const Main = () => {
  return (
    <div className="main">
      <div className="hero">
        <div className="intro">
          <h1 className="title">Welcome to the World of Journalism</h1>
          <h2>-Unveiling the Insights with Mr. Arun</h2>
          <p class="titleDesc">Want to become a passionate and distinguished journalist
            who uncovers truths and shapes narratives? Welcome to a transformative journey guided by a maestro of the field - Mr. Arun,
            a veteran journalist with decades of experience and wisdom to impart.</p>
          <span class="quote"></span>
          <button><Link to='courses' smooth={true} offset={-190} duration={500} >Go to Course →</Link></button>
        </div>
        <div className="imgcontainer">
          <img src={journalist} />
          <div className="imgcontent">
            <h1>``</h1>
            <p>Greetings!! I am Mr. Arun, a veteran of journalism with over four decades of experience.
              I've navigated intricate paths, uncovering truths and shaping narratives resonating with society
              My journey is one of relentless pursuit of truth and unwavering commitment to integrity
              Join me to delve into journalism's heart, ignite passion, and make a difference by 
              Joining the handes with experts in the filed of Journalism to help you reach grater place...</p><br />
            <h1 className="imgcontent-h1">-Mr.Arun``</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main