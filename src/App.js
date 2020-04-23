import React, { useEffect, useState } from 'react';
import Navbar from './component/navbar/navbar';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import ScrollMagic from "scrollmagic";
import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

const App = () => {
  const [arrowUp, setArrowUp] = useState(false);
  const [bgNavbar, setBgNavbar] = useState(false);
  const [colorArrow, setColorArrow] = useState(true);
  var controller = new ScrollMagic.Controller();

  // Timeline
  let tl = gsap.timeline()
  let specialiteTl = gsap.timeline()
  let menuTl = gsap.timeline()
  let contactTl = gsap.timeline()
  let mapTl = gsap.timeline()
  let teamTl = gsap.timeline()
  let separationTl = gsap.timeline()
  let parallaxSpecialiteTl = gsap.timeline()

  useEffect(() => {
    // window.onscroll = () => {
    //   window.pageYOffset >= 837 ? setArrowUp(true) : setArrowUp(false);
    //   window.pageYOffset >= 122 ? setBgNavbar(true) : setBgNavbar(false);
    //   window.pageYOffset >= 0 && window.pageYOffset <= 1317 ? setColorArrow(true) :
    //     window.pageYOffset >= 1318 && window.pageYOffset <= 3905 ? setColorArrow(false) :
    //       window.pageYOffset >= 3905 && window.pageYOffset <= 4509 ? setColorArrow(true) :
    //         window.pageYOffset >= 4510 && window.pageYOffset <= 4957 ? setColorArrow(false) :
    //           window.pageYOffset >= 4958 && window.pageYOffset <= 5552 ? setColorArrow(true) :
    //             window.pageYOffset >= 5552 && setColorArrow(false);
    // }

    // parallax header
    new ScrollMagic.Scene({
      triggerElement: "#home-header",
      duration: "100%",
      triggerHook: 0
    })
      // .addIndicators()
      .setTween(".img-header-cover", { duration: 1, y: "-10%", ease: "power0.easeNone" })
      .addTo(controller)

    // display background of navbar
    new ScrollMagic.Scene({
      offset: 1,
    })
      .setClassToggle("#navbar", "bg-nav")
      .addTo(controller)

    // restaurant block
    tl.from('#restaurant', { duration: 1.2, opacity: 0, y: "100px", ease: "power0.easeNone" })
    new ScrollMagic.Scene({
      triggerElement: "#home-header",
      duration: "110%",
      triggerHook: .4,
    })
      // .addIndicators()
      .setTween(tl)
      .addTo(controller)

    // Specialite
    specialiteTl.from("#plat", { duration: 1.2, y: "100px", opacity: 0, ease: "power0.easeNone" })
    new ScrollMagic.Scene({
      triggerElement: "#specialite",
      duration: "50%",
      triggerHook: .4
    })
      // .addIndicators()
      .setTween(specialiteTl)
      .addTo(controller)

    parallaxSpecialiteTl.from("#image-specialite", { duration: 1.2, y: "-10%", ease: "power0.easeNone" })
    new ScrollMagic.Scene({
      triggerElement: "#home-header",
      duration: "250%",
      triggerHook: .5
    })
      // .addIndicators()
      .setTween(parallaxSpecialiteTl)
      .addTo(controller)


    // Menu
    menuTl.from("#menu", { duration: 1.2, opacity: 0, y: "40%", stagger: .2, ease: "power0.easeNone" })
    new ScrollMagic.Scene({
      triggerElement: ".separate-picture",
      duration: "80%",
      triggerHook: 0
    })
      // .addIndicators()
      .setTween(menuTl)
      .addTo(controller)


    // Contact
    contactTl.from(".img-contact", { duration: 1.2, y: "-40%", ease: "power0.easeNone" })
    new ScrollMagic.Scene({
      triggerElement: "#menu",
      duration: "300%",
      triggerHook: .5
    })
      .setTween(contactTl)
      // .addIndicators()
      .addTo(controller)


    new ScrollMagic.Scene({
      triggerElement: ".banniere-contact",
      duration: "30%",
      triggerHook: .2
    })
      // .addIndicators()
      .setTween(mapTl.from(".contact", { duration: 1.2, y: "100px", opacity: 0, ease: "power0.easeNone" }))
      .addTo(controller)


    // Team
    teamTl.from(".circle-team", { duration: 1.3, scale: .9, y: "100px", opacity: 0, ease: "power3.inOut" })
    new ScrollMagic.Scene({
      triggerElement: ".banniere-contact",
      duration: "100%",
      triggerHook: .2
    })
      // .addIndicators()
      .setTween(teamTl)
      .addTo(controller)

    // Separation avant menu
    separationTl.from(".separate-picture", { duration: 1.2, y: "-10%", ease: "power3.inOut" })
    new ScrollMagic.Scene({
      triggerElement: "#plat",
      duration: "200%",
      triggerHook: .5
    })
      // .addIndicators()
      .setTween(separationTl)
      .addTo(controller)
  })

  return (
    < div >
      <Navbar bgNavbar={bgNavbar}>
        <Home arrowUp={arrowUp} colorArrow={colorArrow} />
      </Navbar>
    </div >
  )
};

export default App;