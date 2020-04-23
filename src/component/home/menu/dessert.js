import React, { useState } from 'react';
import { menuDessertLeft, menuDessertRight } from '../../../config/menuConfig';

const Desserts = () => {
    return (
        <div className="menu-list">
            <div className="container mt-5 form-inline">
                <div className="form-inline text-center">
                    {menuDessertLeft.map((element, i) =>
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

export default Desserts;