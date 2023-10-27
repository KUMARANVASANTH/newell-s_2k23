import React from 'react'
import Events from '../Components/Events'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Header from '../Components/header'
function event() {
  return (
    <div className='relative'>
    <Header/>
    <NavBar/>
    <Events />
    <Footer/>
    </div>
  )
}

export default event