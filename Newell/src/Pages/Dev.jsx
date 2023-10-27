import React, {useState} from "react"
import Header from '../Components/header'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Developers from '../Components/Developers'

function Dev(){
    return(
        <div className="relative">
            <Header/>
            <NavBar/>
            <Developers/>
            <Footer/>
        </div>
    );
}

export default Dev
