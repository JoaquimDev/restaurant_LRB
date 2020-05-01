import React from 'react';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { team } from '../../config/contactConfig';
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Map from './map';

const Contact = (props) => {
    return (
        <div id="contact">
            <div className="banniere-contact">
                <div className="text-center img-contact"></div>
                <p>Contact</p>
            </div>
            <div className="contact">
                <div className="informations">
                    <div className="form-inline block-info">
                        <div className="bg-icon mr-3">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <a href="tel:0139098217">01 39 09 82 17</a>
                    </div>
                    <div className="form-inline block-info mt-4">
                        <div className="bg-icon mr-3">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <a href="mailto:lareinneblanche@gmail.com">lareinneblanche@gmail.com</a>
                    </div>
                    <div className="form-inline block-info mt-4">
                        <img src={Instagram} className="mr-3 network-logo" alt="logo instagram" />
                        <a href="https://www.instagram.com/jogmr_tic/" target="blank">La Reine blanche</a>
                    </div>
                    <div className="form-inline block-info mt-4">
                        <img src={Facebook} className="mr-3 network-logo" alt="logo facebook" />
                        <a href="https://www.facebook.com/tictac.senzala.7" target="blanck">La Reine blanche</a>
                    </div>
                </div>
                <Map />
            </div>
            <div id="team" className="mx-auto text-center p-0">
                <div className="contain-team">
                </div>
                <div className="section_team_02">
                    {team.map((element, i) =>
                        <div key={i} className="block-team">
                            <div
                                className="circle-team"
                                style={{
                                    background: `url(${element.url}) no-repeat`,
                                    backgroundPositionX: 'center',
                                    backgroundSize: "cover"
                                }}
                            >
                            </div>
                            <div className="infos-team">
                                <p>{element.name}</p>
                                <p>{element.job}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Contact;