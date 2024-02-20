import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <div>
            
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <nav className="navbar navbar-expand-sm bg-primary ">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Product</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
           
        </div>
    </>
    )
}

export default Header