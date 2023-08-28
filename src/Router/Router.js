import React , { useState }from "react";
import Home from '../Home/Home';
import  { BrowserRouter as AppRouter, Route, Link , Routes } from 'react-router-dom';
import Services from '../Service/Service'
import About from '../About/About';
import Contact from "../Contact/Contact";
import NavBar from "../NavBar";

 const Router = () => {
    const [Mobile, setMobile] = useState(true)
   return (

    <AppRouter>
        
<NavBar/>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contacts' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>

        </Routes>


    </AppRouter>
   )

};
export default Router;