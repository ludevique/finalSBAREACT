import React from "react"
//----------------------import {Link} to wrap the element component,this will help take us everywhere we want to go. Note: use the "to" property--//
import { Link } from "react-router-dom"

export default function Header () {

    return (
        
        <header>
            <nav className="mynavbar">
                <Link to="/homepage">Homepage</Link>
            </nav>
         </header>
         
    )
}