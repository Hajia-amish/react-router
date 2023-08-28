import React from "react";
import { useNavigate,Link } from 'react-router-dom';


const About = () => {
    const  navigate = useNavigate();
 return (
    <div>
        <button style={{marginLeft: "20px"}}>
            <Link to={'/'}>Home</Link>

        </button>
        <button style={{marginLeft: "20PX"}}>
            <Link to={'/about'}>About</Link>

        </button>
        <button style={{marginLeft: "20PX"}}>
            <Link to={'/service'}>Service</Link>

        </button>
<h1> ABOUT US</h1>
   <p>Essence is one-step medical institution
     dedicated to professional testing of
      clinical specimens and providing various
       professional health examination services...</p>
    </div>
 );
};
export default About;
