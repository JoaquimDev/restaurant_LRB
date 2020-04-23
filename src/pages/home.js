import React from 'react';
import Header from '../component/home/header';
import Restaurant from '../component/home/restaurant';
import Specialite from '../component/home/specialite';
import Plats from '../component/home/plat';
import Menu from '../component/home/menu/menu';
import Contact from '../component/home/contact';
import Footer from '../component/home/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <Header />
            <Restaurant />
            <Specialite />
            <Plats />
            <div id="separate">
                <div className="separate-picture"></div>
            </div>
            <Menu />
            <Contact />
            <Footer />
            {props.arrowUp &&
                <FontAwesomeIcon onClick={() => backToTop()} icon={faArrowAltCircleUp} className={props.colorArrow ? "icon-arrowTop" : "icon-arrowTop-dark"} />
            }
        </div>
    )
}

export default Home;