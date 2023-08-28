import React from "react";
import { useNavigate,Link } from 'react-router-dom';


const Service = () => {
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
            <Link to={'/service'}>contact</Link>

        </button>
                <h1> SERVICES </h1>
                <ul>
                    <li>
                  BOOK AN APPOINTMENT
                    </li>
                    <li>
                  QUALITY
                    </li>
                    <li>
                   CUSTOMER SATISFACTION
                    </li>
                    <li>
                   ACCOUNTABILITY
                    </li>
                </ul>
    </div>
 );
};
export default Service;

