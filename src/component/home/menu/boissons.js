import React, { useState } from 'react';
import { menuBoissonLeft, menuBoissonRight } from '../../../config/menuConfig';

const Boissons = () => {
    return (
        <div className="menu-list">
           <div className="container mt-5 form-inline">
                <div className="form-inline text-center">
                    {menuBoissonLeft.map((element, i) =>
                        <div className="form-inline col-6 mt-5 text-left" key={i}>
                            <div className="plats-block">
                                <p className="plats-name">{element.name}</p>
                                <p className="description">{element.description}</p>
                            </div>
                            <div>
                                <p className="price">{element.price} €</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Boissons;