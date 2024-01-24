import React, { useState, useEffect } from 'react';
import { MdClose, MdMenu } from 'react-icons/md'
import './NavBar.css'
import { Link } from 'react-scroll'
import Resume from '../assets/Ruizhe-Sun-Resume.pdf'


export default function NavBar() {
    const [showNav, SetShowNav] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
            console.log("STICK!")
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <nav className={`${sticky ? "navBar sticky" : "navBar"}`}>
            <a href="/">
                <img src='rslogo.svg'></img>
            </a>

            <div className={showNav ? 'mobile-menu-icon hide-items' : 'mobile-menu-icon'} onClick={() => SetShowNav(!showNav)} role='button' onKeyDown={() => SetShowNav(!showNav)} tabIndex={0}>
                <MdMenu />
            </div>

            <ul className={!showNav ? 'nav-items hide-items' : 'nav-items'}>
                <div className='close-menu-icon' onClick={() => SetShowNav(!showNav)} role='button' onKeyDown={() => SetShowNav(!showNav)} tabIndex={0}>
                    <MdClose />
                </div>

                <li>
                    <Link activeClass="active" smooth spy to="about" onClick={() => SetShowNav(!showNav)} role='button' onKeyDown={() => SetShowNav(!showNav)}>About</Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="experience" onClick={() => SetShowNav(!showNav)} role='button' onKeyDown={() => SetShowNav(!showNav)}>Experience</Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="projects" onClick={() => SetShowNav(!showNav)} role='button' onKeyDown={() => SetShowNav(!showNav)}>Projects</Link>
                </li>
                <li>
                    <a href={Resume} target="_blank" onClick={() => SetShowNav(!showNav)} role='button' onKeyDown={() => SetShowNav(!showNav)}>Resume</a>
                </li>
            </ul>
        </nav >
    )
}