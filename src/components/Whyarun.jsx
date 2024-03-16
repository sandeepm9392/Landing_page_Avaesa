import React, { useRef } from 'react'
import award1 from '../assets/award_3.jpg'
import award2 from '../assets/award_2.jpeg'
import award3 from '../assets/journalist_1.jpg'
import next_1 from '../assets/right.png'
import next_2 from '../assets/back-button.png'
import men_1 from '../assets/men_1.jpg'
import men_2 from '../assets/men_2.jpg'
import men_3 from '../assets/men_3.jpg'
import women_1 from '../assets/women_1.jpg'
import women_2 from '../assets/women_2.jpg'
import women_3 from '../assets/women_3.jpg'
const Whyarun = () => {
  const slider = useRef();
  let tx = 0;
  const slideFront = ()=>{
    if (tx>-50){
      tx -=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`; 

  }
  const slideBack = ()=>{
    if (tx<0){
      tx +=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`; 

  }
  return (
    <>
    <div className="whyarun">
      <div className="wrapper arunw">
        <div className="arun">
          <img src={award2} />
          <p>Pulitzer Prize for Investigative Journalism</p>
        </div>
        <div className="arun" >
          <img src={award1} />
          <p>2019 Ramon Magsaysay Awardee</p>
        </div>
        <div className="arun">
          <img src={award3} />
          <p>Lifetime Achievement Award in Journalism</p>
        </div>
      </div>
      <div className="testimonial">
        <h1>Reviews</h1>
        <img src={next_1} alt="" class="next1-btn" onClick={slideFront} />
        <img src={next_2} alt="" class='next2-btn' onClick={slideBack}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={men_1} alt="" />
                  <div>
                    <h3>Rahul Singhania</h3><br/>
                    <span>Journalism Student</span><br/>
                    <span> Bengaluru, Karnataka</span>
                  </div>
                </div>
                <p>Studying journalism with Arun has been an eye-opening experience.
                   The hands-on training and mentorship provided a solid foundation 
                  now feel world of journalism with confidence..</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={women_1} alt="" />
                  <div>
                    <h3>Anuska sharma</h3><br/>
                    <span>Journalist</span><br/>
                    <span>kottakki ,vzm</span>
                  </div>
                </div>
                <p>As a journalist, Arun's course was a revelation.
                   The modules on investigative reporting and ethical journalism
                    not only enhanced my skills but also ignited my passion for 
                    truth-seeking in media</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={women_2} alt="" />
                  <div>
                    <h3>Dhana sri</h3><br/>
                    <span>Student</span><br/>
                    <span> Ahmedabad, Gujarat</span>
                  </div>
                </div>
                <p>Enrolling in Arun's program was one of the best decisions I've made for my career.
                   The practical insights and industry knowledge have empowered me to lead my team with </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={men_2} alt="" />
                  <div>
                    <h3>Babu Rao</h3><br/>
                    <span> Content Writer</span><br/>
                    <span>kottakki ,vzm</span>
                  </div>
                </div>
                <p>The Arun community fosters a culture of learning and 
                  growth. I've honed my writing skills and expanded my 
                  network, thanks to their engaging courses."</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={men_3} alt="" />
                  <div>
                    <h3>Sandeep</h3><br/>
                    <span>Writer</span><br/>
                    <span>kolkata</span>
                  </div>
                </div>
                <p>The Arun community fosters a culture of learning and 
                  growth. I've honed my writing skills and expanded my 
                  network, thanks to their engaging courses."</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={women_3} alt="" />
                  <div>
                    <h3>Swathi</h3><br/>
                    <span> Content Writer</span><br/>
                    <span>kottakki ,vzm</span>
                  </div>
                </div>
                <p>The Arun community fosters a culture of learning and 
                  growth. I've honed my writing skills and expanded my 
                  network, thanks to their engaging courses."</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Whyarun