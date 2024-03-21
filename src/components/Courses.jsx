import React, { useState } from 'react'
import checked from "../assets/checked.png";
import unchecked from "../assets/x-mark.png"
import enroll from "../assets/free.jpg";
import enroll2 from "../assets/enroll3.jpg"
const Courses = () => {

  const [showForm1,setShowForm1] = useState(false);
  const [showForm2,setShowForm2] = useState(false);

  const handleEnrollFree = ()=>{
    setShowForm1(!showForm1);
  }
  const handleEnrollPaid = ()=>{
    setShowForm2(!showForm2);
  }


  return (
    <div className="courses">
      <div className="boxes">
        <div className="box">
          <h3>Free Trial for 1 session!</h3>
          <div className="wrap">
            <div className="enroll">
              <img class="enrollimg1" src={enroll} />
            </div>
            <ul>
              <h4>Comprehensive Journalism by Arun</h4>
              <li><img class="tick" src={checked} />Can attend 1 session Only</li>
              <li><img class="tick" src={checked} />Limited resourses</li>
              <li><img class="tick" src={checked} />No fees</li>
              <li><img class="tick" src={unchecked} />Guidance</li>
            </ul>
          </div>
          <button onClick={handleEnrollFree}>Free Trial</button>
          {showForm1 && (
            <form className="enrollmentForm">
              <label htmlFor="name">Name:</label>
              <input type="text" />
              <label htmlFor="email">Email</label>
              <input type="text" />
              <button>Enroll now</button>
            </form>
          )}
        </div>
        <div className="box">
          <h3>Get all benifits by Enrolling into the course</h3>
          <div className="wrap">
            <div className="enroll">
              <img class="enrollimg2" src={enroll2} />
            </div>
            <ul>
              <h4>Comprehensive Journalism by Arun</h4>
              <li><img class="tick" src={checked} />Can attend All sessions</li>
              <li><img class="tick" src={checked} />Unlimited resourses</li>
              <li><img class="tick" src={checked} />minimun fees</li>
              <li><img class="tick" src={checked} />Guidance</li>
            </ul>
          </div>
          <button onClick={handleEnrollPaid}>Enroll $500/<span>2weeks</span></button>
          {showForm2 && (
            <form className="enrollmentForm">
              <label htmlFor="name">Name:</label>
              <input type="text" />
              <label htmlFor="email">Email</label>
              <input type="text" />
              <button>Enroll now</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Courses