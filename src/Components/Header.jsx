import React from "react"
//----------------------import {Link} to wrap the element component,this will help take us everywhere we want to go. Note: use the "to" property--//
import { Link } from "react-router-dom"

export default function Header () {

    return (
        <nav className="mynavbar">
            <ul>
                <li>
                    <Link to="/homepage">Homepage</Link>
                </li>
                <li>
                    <Link to='/fanbase'>Fanbase</Link>
                </li>
            </ul>
        </nav>
    )
}