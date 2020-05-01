import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = (props) => {
    const [collapse, setCollapse] = useState(false)

    let tlMenu = gsap.timeline();
    let closeOnclickLinkTl = gsap.timeline();

    const toContact = (destination) => {
        // recuperation du nom de la classe des liens pour les ciblé
        const scroll = destination.target.classList.value;

        // Destination au click sur les lien
        scroll === "specialite" ? gsap.to(window, { duration: 1.3, scrollTo: '#specialite', ease: "power3.inOut" }) :
            scroll === "Menu" ? gsap.to(window, { duration: 1.3, scrollTo: '#menu', ease: "power3.inOut" }) :
                scroll === "apropos" ? gsap.to(window, { duration: 1.3, scrollTo: "#restaurant", ease: "power3.inOut" }) :
                    scroll === "contact-link" && gsap.to(window, { duration: 1.3, scrollTo: "#contact", ease: "power3.inOut" })

        closeOnclickLinkTl.to(".nav-link-small", { duration: 1, height: 0 })
            .to(".cover-nav", { duration: .5, width: 0, ease: "power3.inOut" })

        setCollapse(!collapse)
    }

    const backtop = () => {
        gsap.to(window, { duration: 1.3, scrollTo: 0, ease: "power3.inOut" })
        closeOnclickLinkTl.to(".nav-link-small", { duration: 1, height: 0 })
            .to(".cover-nav", { duration: .5, width: 0, ease: "power3.inOut" })
        setCollapse(false)
    }

    const onClickBurger = () => {
        !collapse ?
            tlMenu.to(".cover-nav", { duration: .5, width: "100%", ease: "power3.inOut" })
                .to(".nav-link-small", { duration: 1, height: "100vh", ease: "power3.inOut" }) :
            tlMenu.to(".nav-link-small", { duration: 1, height: 0 })
                .to(".cover-nav", { duration: .5, width: 0, ease: "power3.inOut" })

        setCollapse(!collapse)
    }

    useEffect(() => {
        let tl = gsap.timeline();   
        window.onscroll = () => {
            window.pageYOffset > 1 && document.getElementById("navbar").classList.add("bg-nav")
            window.pageYOffset === 0 && document.getElementById("navbar").classList.remove("bg-nav")
        }
        tl.to("#navbar", { duration: 1.2, opacity: 1, ease: "power3.inOut", delay: 1 })
        gsap.to(window, { duration: 1.2, scrollTo: 0 })
    }, [])

    return (
        <div id="nav">
            <div id="navbar" className="form-inline">
                <div className="form-inline">
                    {/* <img className="portugal" src="images/portugal.png" width="100%" alt="porutgal flag" /> */}
                    <h1 className="title-site" onClick={() => backtop()} >La Reine Blanche</h1>
                </div>
                <div className="nav">
                    <p className="Menu" onClick={(e) => toContact(e)}>Menu</p>
                    <span>-</span>
                    <p className="specialite" onClick={(e) => toContact(e)}>Spécialités</p>
                    <span>-</span>
                    <p className="apropos" onClick={(e) => toContact(e)}>À propos</p>
                    <span>-</span>
                    <p className="contact-link" onClick={(e) => toContact(e)}>Contact</p>
                </div>
            </div>
            <div id="navbar-small-screen">
                <div className="form-inline contain-nav-small">
                    <div className="cover-nav"></div>
                    <h1 className="title-site" onClick={() => backtop()}>La Reine Blanche</h1>
                    <div className={!collapse ? "menu-burger" : "menu-burger open"} onClick={() => onClickBurger()}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="nav-link-small">
                    <p className="Menu" onClick={(e) => toContact(e)}>Menu</p>
                    <p className="specialite" onClick={(e) => toContact(e)}>Spécialités</p>
                    <p className="apropos" onClick={(e) => toContact(e)}>À propos</p>
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