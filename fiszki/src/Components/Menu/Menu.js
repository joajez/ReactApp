import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css';


import menuComponents from '../../config/menuConfig';



const Menu = () => {

    const menuItems = []
    for(let i=0;i<menuComponents.length;i++){
        menuItems.push(<li><NavLink exact to = {menuComponents[i]['url']} activeClassName = 'menu-active'>{menuComponents[i]['title']}</NavLink></li>)
    }

    return (
            <div>
                <nav className='menu'>
                    <ul className='menu-list'>
                        {menuItems}
                    </ul>
                </nav>
            </div>
        )
    }

export default Menu;