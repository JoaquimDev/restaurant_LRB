import React from 'react';
import { menuBoissonLeft } from '../../../config/menuConfig';

const Boissons = () => {
    return (
        <div className="menu-list">
           <div className="container mt-5 form-inline">
                <div className="form-inline text-center">
                    {menuBoissonLeft.map((element, i) =>
                       <div className="contain-plats form-inline mt-5" key={i}>
                       <div className="mx-auto form-inline">
                           <div className="plats-block">
                               <p className="plats-name">{element.name}</p>
                               <p className="description">{element.description}</p>
                           </div>
                           <div>
                               <p className="price">{element.price} €</p>
                           </div>
                       </div>
                   </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Boissons;