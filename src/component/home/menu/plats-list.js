import React, { useState } from 'react';
import { menuLeft, menuRight } from '../../../config/menuConfig';

const PlatsList = () => {
    return (
        <div className="menu-list">
            <div className="container mt-5 form-inline">
                <div className="text-center form-inline">
                    {menuLeft.map((element, i) =>
                        <div className="form-inline mt-5 col-6 text-left" key={i}>
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

export default PlatsList;