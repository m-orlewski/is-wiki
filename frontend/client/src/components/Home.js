import { useState } from 'react';
import { FaFacebookF,FaTwitter,FaYoutube,FaGooglePlus } from "react-icons/fa";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import background1 from "../images/1.svg";
import background2 from "../images/2.jpg";
import background3 from "../images/3.jpg";
import background4 from "../images/4.jpg";
import background5 from "../images/5.jpg";
import background6 from "../images/6.jpg";
import background7 from "../images/7.jpg";

const Home = () => {
    const backgrounds=[background1,background2,background3,background4,background5,background6,background7];
    const [background, SetBackground] = useState(0);
    
    return (
        <section className="home-section">
            <div className="background">
                <MdKeyboardArrowLeft style={{fontSize: '80px',float: 'left',marginTop: '220px',marginLeft: '20px'}} onClick=
                {()=>{background === 0 ? SetBackground(6):SetBackground(background-1)}}/>
                <img src={backgrounds[background]} alt="Logo" width="960px" height="500px"/>
                <MdKeyboardArrowRight style={{fontSize: '80px',float: 'right',marginTop: '220px',marginRight: '20px'}} onClick=
                {()=>{background === 6 ? SetBackground(0):SetBackground(background+1)}}/>
            </div>
            <h1 style={{marginTop: '40px'}}>Welcome to</h1>
            <h1 style={{color: 'blue'}}>IS-wiki for students of AGH</h1>
            <br/><br/>
            <h5>On this page you will find a lot of valuable information about the lecturers or about the subjects</h5>
            <br/>
            <h5>You also have the opportunity to explore lesson materials</h5>
            <div className="socials">
                <div className="fb">
                    <FaFacebookF />
                </div>
                <div className="yt">
                    <FaYoutube/>
                </div>
                <div className="tw">
                    <FaTwitter/>
                </div>
                <div className="gplus">
                    <FaGooglePlus/>
                </div>
		    </div>
        </section>
    )
}

export default Home