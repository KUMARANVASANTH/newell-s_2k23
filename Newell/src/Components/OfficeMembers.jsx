// import React, {useState} from "react";
import '../styles/officemembers.css'


function About() {
    return (
        <>

            <div className="cards">
                <h1 className='relative text-[var(--red)] font-semibold text-2xl'>Staff Coordinators</h1><br />
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/hod.jpg')} />
                                <div className="absolute text-black paraname">Dr.T.Meera Devi</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Head Of The Department</h1>    
                                <h1 className="text-center post">ECE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/arul.jpg')} />
                                <div className="absolute text-black paraname">Dr.A.Arulmurugan</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Assistant Professor(SI.G)</h1>
                                <h1 className="text-center post">ECE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/chandru.jpg')} />
                                <div className="absolute text-black paraname">Mr.A.Chandrasekaran</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Assistant Professor</h1>
                                <h1 className="text-center post">ECE</h1>

                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="cardrow">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/jude.jpg')} />
                                <div className="absolute text-black paraname">Dr . M . Joseph Auxilius Jude</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Associate professor</h1>
                                <h1 className="text-center post">ECE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/vennila.jpg')} />
                                <div className="absolute text-black paraname">Mrs . A . Vennila</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Assistant Professor</h1>
                                <h1 className="text-center post">ECE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/ramya.jpg')} />
                                <div className="absolute text-black paraname">Mrs . A .Ramyea</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Assistant Professor</h1>
                                <h1 className="text-center post">ECE</h1>

                            </div>
                        </div>
                    </div></div><br />
                <h1 className='relative font-semibold text-2xl text-[var(--red)]'>ECEA and IETE Members</h1><br />
                <div className="cardrow">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front " >
                                <img src={require('../assets/office_barriers/Arunadithya.jpg')} />
                                <div className="absolute text-[var(--blue)] paraname">Arun Aditya N</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Secretary</h1>
                                <h1 className="text-center post">ECEA</h1>


                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/shreehariharan.jpg')} />
                                <div className="absolute text-black paraname">Shri Hariharan</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Chairman</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="cardrow">
                <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/sriharini.jpg')} />
                                <div className="absolute text-black paraname">Sri Harini</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Additional Secretary</h1>    
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front " >
                                <img src={require('../assets/office_barriers/JayaprasathM.jpg')} />
                                <div className="absolute text-black paraname">Jayaprasath M</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Vice Chairman</h1>
                                <h1 className="text-center post">IETE</h1>


                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/SahasraV.jpg')} />
                                <div className="absolute text-black paraname">Sahasra V</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Treasurer</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/MithunkumarT.jpg')} />
                                <div className="absolute text-black paraname">Mithunkumar T</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Additional Secretary</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/AkshayaRS.jpg')} />
                                <div className="absolute text-black paraname">Akshaya R S</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Harini R.jpg')} />
                                <div className="absolute text-black paraname">Harini R</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Additonal Secretary</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Jeevanatham.jpg')} />
                                <div className="absolute text-black paraname">Jeevanantham N</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Additional Secretary</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/maheswari.jpg')} />
                                <div className="absolute text-black paraname">Maheswari V</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Joint Secretary</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/prasanna.jpg')} />
                                <div className="absolute text-black paraname">Prasanna G</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Joint Secretary</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={require('../assets/office_barriers/aravindhan4.jpg')} />
                                <div className="absolute text-black paraname">Aravind R</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={require('../assets/office_barriers/gokuld.jpg')} />
                                <div className="absolute text-black paraname">Gokul D</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/KAUSIKAS.jpg')} />
                                <div className="absolute text-black paraname">Kausika S</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Sowmitha.jpg')} />
                                <div className="absolute text-black paraname">Sowmitha K</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Nisaanth P.jpg')} />
                                <div className="absolute text-black paraname">Nisaanth P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/shreeram.jpg')} />
                                <div className="absolute text-black paraname">Shreeram P V</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/sowmika.jpg')} />
                                <div className="absolute text-black paraname">Sowmika</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Naveen BharathiP.JPG')} />
                                <div className="absolute text-black paraname">Naveen Bharathi P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>    
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/JinishaM.jpg')} />
                                <div className="absolute text-black paraname">Jinisha M</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/KavyashreeVN.jpg')} />
                                <div className="absolute text-black paraname">Kavyashree V N</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/RagunathRS.jpg')} />
                                <div className="absolute text-black paraname">Ragunath R S</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/AravindanA.jpg')} />
                                <div className="absolute text-black paraname">Aravindan A</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>    
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/CibiKrishnaV.jpg')} />
                                <div className="absolute text-black paraname">CibiKrishna V</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/BhoovithaS.jpg')} />
                                <div className="absolute text-black paraname">Bhoovitha S</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/SaravanakumarP.jpg')} />
                                <div className="absolute text-black paraname">Saravanakumar P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Gnanavenkatesh.jpg')} />
                                <div className="absolute text-black paraname">Gnanavenkatesh</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>    
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Nikita.jpg')} />
                                <div className="absolute text-black paraname">Nikita</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Office Bearers</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/DharsanS.jpg')} />
                                <div className="absolute text-black paraname">Dharsan S</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Additional Secretary</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/POOVENTHAN.jpeg')} />
                                <div className="absolute text-black paraname">Pooventhan D</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/RAJAKUMARANR.jpg')} />
                                <div className="absolute text-black paraname">Rajakumaran R</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>    
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Kaveya P.jpg')} />
                                <div className="absolute text-black paraname">Kaveya P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Secretary</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Sabari U P.jpg')} />
                                <div className="absolute text-black paraname">Sabari U P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Joint Secretary</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/Nisaanth P.jpg')} />
                                <div className="absolute text-black paraname">Nisaanth P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/NanthakumaranS.jpg')} />
                                <div className="absolute text-black paraname">Nanthakumaran S</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>    
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/SRI YAALINI M.jpg')} />
                                <div className="absolute text-black paraname">SRI YAALINI M</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Joint Secretary</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/aananthitp.JPG')} />
                                <div className="absolute text-black paraname">Aananthi T P</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Additional Secretary</h1>
                                <h1 className="text-center post">ECEA</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/SURESH.jpg')} />
                                <div className="absolute text-black paraname">Suresh Kanna</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>    
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardrow">
                    
                   
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/maleicon.jpg')} />
                                <div className="absolute text-black paraname">Gulnas N</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Treasurer</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/dharani.jpg')} />
                                <div className="absolute text-black paraname">Dharanidharan K</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require('../assets/office_barriers/maleicon.jpg')} />
                                <div className="absolute text-black paraname">Aruneshwar T</div>
                            </div>
                            <div class="flip-card-back">
                                <h1 className="post text-center">Executive Member</h1>
                                <h1 className="text-center post">IETE</h1>

                            </div>
                        </div>
                    </div>
                </div>
                
                
               



               

            </div>
        </>

    )
}

export default About
