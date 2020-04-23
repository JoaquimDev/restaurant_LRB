import React, { useState } from 'react';
import PlatsList from './plats-list';
import Desserts from './dessert';
import Boissons from './boissons';

const Menu = () => {
    const [menuList, setMenuList] = useState("plats-list");

    const menuSwitch = (e) => {
        setMenuList(e.target.id)
    }

    return (
        <div id="menu" className="text-center">
            <p className="title-menu">Menu</p>
            <div className="nav-menu">
                <ul className="form-inline d-inline-flex">
                    <li
                        onClick={(e) => menuSwitch(e)}
                        id="plats-list"
                        style={{ color: menuList === "plats-list" ? "#c5ab6b" : "#d4d4d4" }}
                    >
                        Plats
                        </li>
                    <li
                        onClick={(e) => menuSwitch(e)}
                        id="desserts"
                        style={{ color: menuList === "desserts" ? "#c5ab6b" : "#d4d4d4" }}
                    >
                        Desserts
                        </li>
                    <li
                        onClick={(e) => menuSwitch(e)}
                        id="boissons"
                        style={{ color: menuList === "boissons" ? "#c5ab6b" : "#d4d4d4" }}
                    >
                        Boissons
                        </li>
                </ul>
            </div>
            {menuList === "plats-list" ? <PlatsList /> :
                menuList === "desserts" ? <Desserts /> :
                    menuList === "boissons" && <Boissons />
            }
            <div id="formule-midi">
                <p className="title-formule">Formule midi</p>
                <div className="container formule">
                    <p>Plat + dessert + boisson</p>
                    <p>12 €</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;