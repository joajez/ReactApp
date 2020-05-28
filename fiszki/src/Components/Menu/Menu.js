import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route  } from "react-router-dom";
import './Menu.css';
import Home from '../Home/Home'
import About from '../About/About'
import Create from '../Create/Create'
import Learn from '../Learn/Learn'
import Ideas from '../Ideas/Ideas'

import menuComponents from '../../config/menuConfig';



const Menu = () => {

    const menuItems = []
    for(let i=0;i<menuComponents.length;i++){
        menuItems.push(<li><NavLink exact to = {menuComponents[i]['url']} activeClassName = 'menu-active'>{menuComponents[i]['title']}</NavLink></li>)
    }

    return (
        <Router>
            <div>
                <nav className='menu'>
                    <ul className='menu-list'>
                        {menuItems}
                    </ul>
                </nav>
            <section>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/learn" component={Learn}/>
                    <Route path="/ideas" component={Ideas}/>
                </Switch>
            </section>
            </div>
        </Router>
        )
    }

    export default Menu;