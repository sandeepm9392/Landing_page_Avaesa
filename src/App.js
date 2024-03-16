import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Main from './components/Main'
import Courses from './components/Courses'
import Programe from './components/Programe'
import Whyarun from './components/Whyarun'
import Connect from './components/Connect'
import Footter from './components/Footter'
const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <h2 class="subtitle">Our Course</h2>
      <Courses />
      <h2 class="subtitle">Our Program</h2>
      <Programe />
      <h2 class="subtitle">Why Arun?</h2>
      <Whyarun />
      <h2 class="subtitle">Contact us</h2>
      <Connect />
      <hr />
      <Footter />
    </div>
  )
}

export default App