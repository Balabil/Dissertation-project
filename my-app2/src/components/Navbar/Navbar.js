import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {MenuItems} from "./MenuItems"
import './Navbar.css';
import Login from '../../pages/Login'
import { useNavigate } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }
    
    
    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>RPL<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}> 
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}        
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Link className='SignIn' to='/Login'>Sign In</Link>

            </nav>
        )
    }
}

export default Navbar