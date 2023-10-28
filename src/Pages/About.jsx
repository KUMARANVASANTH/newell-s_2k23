import React, {useState} from "react"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Header from '../Components/header'
// import Officemembers from '../Components/OfficeMembers'
// import Aboutdept from "../Components/aboutdept"

function About(){
    return(
        <div className="relative">
            <Header/>
            <NavBar/>
            {/* <Aboutdept />
            <Officemembers /> */}
            <Footer/>
        </div>
    )
}

export default About