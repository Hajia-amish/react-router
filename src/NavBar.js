import React from 'react'
import  { BrowserRouter as AppRouter, Route, Link , Routes } from 'react-router-dom';

export default function NavBar() {
  return (
    <div><nav className="navbar">

    <h3 className="logo"> Logo</h3>
     
    <Link to='/'>Home</Link>
    <Link to='/About'>About</Link>
    <Link to='/Contacts'>Contact</Link>
    <Link to='/Services'>Service</Link>
</nav>

<hr/></div>
  )
}
