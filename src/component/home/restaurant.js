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
        <div id="restaurant" className="form-inline">
            <div className=" p-0 text-center section_01">
                <div className="reservation">
                    <p>Réservation</p>
                    <p className="description mt-3">Pour réserver votre table ou pour vos commandes en ligne :</p>
                    <button onClick={() => goTo()}>Contactez-nous</button>
                </div>
                <div className="img_section_01" style={{ height: "50%" }}>
                    <img src="https://images.pexels.com/photos/2306282/pexels-photo-2306282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="100%" alt="restaurant la reinse blanche" />
                </div>
            </div>
            <div className="p-0 text-center section_02" style={{ height: "100%" }}>
                <div className="img_section_02" style={{ height: "50%" }}>
                    <img src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" alt="restaurant la reinse blanche" />
                </div>
                <div className="apropos" style={{ height: "50%" }}>
                    <p>À propos</p>
                    <p className="description">
                        Situé à Carrières-sous-Poissy, le Restaurant La Reine Blanche vous invite à un voyage au cœur du Portugal.
                        Les nouveaux gérants vous offriront une atmosphère conviviale, décontractée et chaleureuse.
                        Venez, vous retrouver pour un déjeuner ou un diner autour d’une carte de spécialités authentiques,
                        le tout arrosé de bons vins !
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;