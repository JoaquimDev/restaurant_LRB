import React from 'react';

const Plats = (props) => {
    return (
        <div id="plat" className="container form-inline text-center">
            <div className="col-3 plats-description" style={{ height: "50%" }}>
                <p className="title-plat">Titre du plats</p>
                <p>Description du plat</p>
            </div>
            <div className="col-3 p-0" style={{ height: "50%" }}>
                <img src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
            </div>
            <div className="col-3 plats-description" style={{ height: "50%" }}>
                <p className="title-plat">Titre du plats</p>
                <p>Description du plat</p>
            </div>
            <div className="col-3 p-0" style={{ height: "50%" }}>
                <img src="https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="100%" />
            </div>
            <div className="col-3 p-0" style={{ height: "50%" }}>
                <img src="https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
            </div>
            <div className="col-3 plats-description" style={{ height: "50%" }}>
                <p className="title-plat">Titre du plats</p>
                <p>Description du plat</p>
            </div>
            <div className="col-3 p-0" style={{ height: "50%" }}>
                <img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" />
            </div>
            <div className="col-3 plats-description" style={{ height: "50%" }}>
                <p className="title-plat">Titre du plats</p>
                <p>Description du plat</p>
            </div>
        </div>
    )
}

export default Plats;