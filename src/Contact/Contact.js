import React from "react";
import { useNavigate,Link } from 'react-router-dom';


const Contact = () => {
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
<h1> CONTACT US</h1>
   <p>Location: Plot. 93 LABONE HOUSING  ESTATES
         LABONE, ACCRA
   </p>
   <p> Call or Whatsapp: +233 055 194 5001</p>
    </div>
 );
};
export default Contact;
