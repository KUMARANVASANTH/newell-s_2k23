import React, {useState} from "react"
import {Fade} from 'react-awesome-reveal';
import '../styles/EventPage.css';
import Modal from './Model.jsx'

function Events(){
    var contest = [
        {
            name: "P'Gaskins",
            content: "P'Gaskins is the very captivating Paper presentation event of Intradepartmental symposium of the Department of Artificial Intelligence",
            session: "FORENOON",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScFDkInbczMgpdvSsFDE455pT4ryaYuRv1p2BVNJIv2bHDZ-g/viewform?usp=sf_link ",
        },
        {
            name: "CodeQuest",
            content: "Welcome to CodeQuest, the ultimate coding challenge within the NEWELL'S 2K23 Symposium. CodeQuest will test your coding skills, logic, and adaptability. Participants will navigate through Preliminary and Main Rounds, showcasing their problem-solving prowess.",
            session: "FORENOON",
            link: "https://forms.gle/yQUqHKKP8j66TVTB6",
        },
        {
            name: "Epiphany",
            content: "Epiphany is a competitive event where participants are presented with images or content and are tasked with finding a specific person in the image or the correct answer related to the content. The objective is to test the participant's observation, detection, and problem solving skills.",
            session: "AFTERNOON",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd0IVnsrocDwhBC_rRkXXKK5b07nWXsPCQDpWr8gfi8x00_2w/viewform?usp=sf_link ",
        },
        {
            name: "Epiphany",
            content: "Epiphany is a competitive event where participants are presented with images or content and are tasked with finding a specific person in the image or the correct answer related to the content. The objective is to test the participant's observation, detection, and problem solving skills.",
            session: "AFTERNOON",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd0IVnsrocDwhBC_rRkXXKK5b07nWXsPCQDpWr8gfi8x00_2w/viewform?usp=sf_link ",
        },
        {
            name: "Agency Entourage",
            content: "This is a marketing event where individuals are tested on the way they can advertise and sell a product wisely.",
            session: "AFTERNOON",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScY7MPcggVizwF2pcwqkXOvKdDns2wD1ND6UKAPeoTk9UIh2g/viewform?usp=sf_link ",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [Contest,setContest] = useState(1);
    const handleClick = event => {
        setIsOpen(current => !current);
        setContest(Number(event.target.id));
    };
    return(
           <div className="flex flex-col justify-between text-center items-center  w-full relative py-[calc(100%*0.05)]" id="events">
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                        Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-between">
                           <div className="shield ">
                               <h1 className="p-2 text-[var(--blue)]">P'Gaskins</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="0" onClick={handleClick}>Register soon</button>
                           </div>
                           <div id="2" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">CodeQuest</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="1" onClick={handleClick}>Register soon</button>
                           </div>
                   </div>
               </Fade>

                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                        Non-Technical Events
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                            <div id="3" className="shield">
                               <h1 className="p-2 text-[var(--blue)]">Epiphany</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="3" onClick={handleClick}>Register soon</button>
                            </div>
                            <div id="4" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Agency Entourage</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="4" onClick={handleClick}>Register soon</button>
                            </div>
                    </div>
                </Fade>
                {/* <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
                       Work Shops 
                    </h1>
                </div>
                </Fade>
               <Fade top>
                   <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
                           <div id="1" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Battery For EV</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="5" onClick={handleClick}>Register soon</button>
                           </div>
                           <div id="2" className="shield" >
                               <h1 className="p-2 text-[var(--blue)]">Drone Tech</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="6" onClick={handleClick}>Register soon</button>
                           </div>
                            <div id="4" className="shield">
                               <h1 className="p-2 text-[var(--blue)]">Smart 5G Antenna</h1>
                                <button className="bg-[#ff2a19] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button" id="7" onClick={handleClick}>Register soon</button>
                            </div>
                   </div>
               </Fade> */}
               <div>
                   {isOpen && <Modal setIsOpen={setIsOpen} handleClick={handleClick} Content={contest[Contest]}/>}
               </div>
            </div>
    )
}

export default Events
