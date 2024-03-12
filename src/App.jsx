import { useState } from 'react'
import Header from './componants/Header/Header'
import './App.css'
import Hero from './componants/Hero/Hero'
import Company from './componants/company/Company'
import Residencies from './Residencies/Residencies'
import Value from './Value/Value'
import Contact from './Contact/Contact'
import GetStarted from './componants/GetStarted/GetStarted'
import Footer from './componants/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'> 
    <div>
      <div className="white-gradient"/>
  <Header/>
  <Hero/>
  </div>
  <Company/>
  <Residencies/>
  <Value/>
  <Contact/>
  <GetStarted/>
  <Footer/>
    </div>
  )
}

export default App
