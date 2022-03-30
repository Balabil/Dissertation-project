import React, { Component } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MenuItems} from "./MenuItems"
import './Navbar.css';
import Login from '../../pages/Login'
import { useNavigate } from "react-router-dom";

class Navbar extends Component {
    state = {clicked: false}
    
   async componentDidMount(){

            const req = await fetch('http://localhost:1337/api/main', {
                method: 'GET',
                headers: {
                    'x-access-token':  localStorage.getItem('token'),
            }
        })

            const data = await req.json();
            const pog = data.name
            this.setState({clicked: false, name: data.name})
            console.log(data.name)
} 

    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }
    clear(){
        localStorage.clear()
        window.location.reload(false);
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
                <a className='nav-links'>{this.state.name}</a>
                <button className='SignIn' onClick={this.clear}>Sign Out</button>

            </nav>
        )
    }
}

export default Navbar