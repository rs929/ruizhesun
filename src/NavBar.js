import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle';
import { MdClose, MdMenu } from 'react-icons/md'
import './NavBar.css'


export default function NavBar() {
    const [showNav, SetShowNav] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        }
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <nav className={`${sticky ? "navBar sticky" : "navBar"}` }>
            <a href="/">
                <img src='rslogo.svg'></img>
            </a>

            <div className={showNav ? 'mobile-menu-icon hide-items' : 'mobile-menu-icon'} onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>
                <MdMenu />
            </div>
            
            <ul className={!showNav ? 'nav-items hide-items' : 'nav-items'}>
                <div className='close-menu-icon' onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>
                    <MdClose />
                </div>
                <li>
                    <NavLink to="/" exact onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick = {() => SetShowNav(!showNav)} role='button' onKeyDown={()=>SetShowNav(!showNav)} tabIndex={0}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}