import React from 'react';

const Restaurant = (props) => {

    const goTo = () => {
        window.scrollTo({
            top: 5080,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div id="restaurant" className="container form-inline">
            <div className="col-4 p-0 text-center" style={{ height: "100%" }}>
                <div className="reservation" style={{ height: "50%" }}>
                    <p>Réservation</p>
                    <p className="description mt-3">On vous attend ! Reservez votre table 24h avant</p>
                    <button onClick={() => goTo()}>Avoir ma table</button>
                </div>
                <div style={{ height: "50%" }}>
                    <img src="https://images.pexels.com/photos/2306282/pexels-photo-2306282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="100%" />
                </div>
            </div>
            <div className="col-8 p-0 text-center" style={{ height: "100%" }}>
                <div style={{ height: "50%" }}>
                    <img src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
                </div>
                <div className="apropos" style={{ height: "50%" }}>
                    <p>À propos</p>
                    <p className="description">Restaurant spécialisé dans la gastronomie traditionnelle portugaise.</p>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;