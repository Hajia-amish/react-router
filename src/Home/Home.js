import React from "react";
import { Link } from 'react-router-dom';


const Home = (props) => {


       console.log(props);
 return (
    <div>
        <button style={{marginLeft: "20px"}}>
            <Link to={'/'}>About</Link>

        </button>
        <button style={{marginLeft: "20PX"}}>
            <Link to={'/about'}>Service</Link>

        </button>
        <button style={{marginLeft: "20PX"}}>
            <Link to={'/service'}>Contact</Link>

        </button>
    <h1> ESSENCE MEDICAL LABORATORY</h1>
   <p>Essence is one-step medical institution
     dedicated to professional testing of
      clinical specimens and providing various
       professional health examination services...</p>
    </div>
 );
};
export default Home;
