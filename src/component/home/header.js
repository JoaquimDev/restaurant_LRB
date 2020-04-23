import React, { useEffect, useRef } from 'react';
import './home.scss';
import BGimages from '../../assets/images/header-picture.jpg';
import { gsap } from "gsap";
import * as ScrollMagic from 'scrollmagic';

const Header = (props) => {
    let img = useRef(null);
    let titleHeader = useRef(null);
    let subTitleHeader = useRef(null);
    // let controller = new ScrollMagic.Controller();

    let tl = gsap.timeline()
    useEffect(() => {
        tl.to(img, {
            scale: 1.3,
            opacity: 1,
            duration: 1.6,
            ease: "power3.inOut",
            delay: .5
        })
            .from([titleHeader, subTitleHeader], {
                translateY: "200px",
                opacity: 0,
                duration: 1.6,
                ease: "power3.inOut",
                stagger: .2
            }, "-=1.2")


    }, [])
    return (
        <div>
            <div id="home-header" className="text-center mx-auto">
                {/* <img src={BGimages} className="img-header-cover" ref={el => img = el} /> */}
                <div className="img-header-cover" ref={el => img = el}></div>
                <div className="title-header-home">
                    <h2 ref={el => titleHeader = el}>La Reine Blanche</h2>
                    <h3 ref={el => subTitleHeader = el}>Spécialités portugaises</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;