import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import { gsap } from "gsap";

const Navbar = (props) => {
    let tl = gsap.timeline();
    const toContact = (destination) => {
        const scroll = destination.target.classList.value;
        window.scrollTo({
            top: scroll === "reservation" ? 5080 :
                scroll === "Menu" ? 3295 :
                    scroll === "apropos" ? 764 :
                        scroll === "contact" ? 5080 :
                            scroll === "title-site" && 0,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        tl.to("#navbar", {duration: 1.2, opacity: 1, ease: "power0.easeNone", delay: 1.2})
    }, [])

    return (
        <div id="nav">
            <div id="navbar" className="form-inline">
                <div className="form-inline">
                    {/* <img className="portugal" src="images/portugal.png" width="100%" alt="porutgal flag" /> */}
                    <h1 className="title-site" onClick={(e) => toContact(e)} >La Reine Blanche</h1>
                </div>
                <div className="nav">
                    <p className="reservation" onClick={(e) => toContact(e)}>Reservation</p>
                    <span>-</span>
                    <p className="Menu" onClick={(e) => toContact(e)}>Menu</p>
                    <span>-</span>
                    <p className="apropos" onClick={(e) => toContact(e)}>À propos</p>
                    <span>-</span>
                    <p className="contact-link" onClick={(e) => toContact(e)}>Contact</p>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Navbar;