import React from "react"
import {Link } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation'

function Landing(){
    return(
        <>
            <div className="text-white relative"  >
                <div className="max-w-[800px] w-full h-[610px] mx-auto text-center gap-x-50 gap-y-0 flex max-lg:flex-col justify-center">
                    <div className="flex flex-col justify-center text-center item-center" >
                        <p className="md:text-3xl sm:text-2xl sm:mt-10 text-1xl font-bold  p-2">Kongu Engineering College</p>
                        <p className="md:text-3xl sm:text-2xl sm:mt-10 text-1xl font-bold  p-2">AI Association</p>
                        <p className="md:text-4xl sm:text-3xl sm:mt-10 text-xl font-bold  p-2">Proudly Presents</p>
                        <div className="relative">
                            <h1 className="md:text-7xl sm:text-6xl sm:mt-10 text-4xl font-bold md:py-6 text-[var(--red)] monoton-font">Newell's 2K23!</h1>
                        </div>
                        <p className="md:text-2xl text-xl font-bolder text-white-500 pb-5">November 1,2023</p>
                        <TypeAnimation className="md:text-5xl font-mono sm:text-4xl text-xl font-bold"
                                sequence={['Online-Registration Closed',2000,'Shortlisted Students will receive message']}
                            wrapper="span"
                            cursor={true}
                            speed={5}
                            repeat={Infinity}
                        />
                        <div className="register_but object-contain">
                            <Link to="/events">
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium my-6 mx-auto py-3" disabled>Register soon</button>
                            </Link>
                        </div>
                        <p className="md:text-lg text-sm text-white">See you guys in Newell's 2K23</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing
