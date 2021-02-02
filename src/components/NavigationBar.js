import React from 'react';


import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className='navbar navbar-expand-sm navbar-light'>
            <Link to="/" className='navbar-brand'>
                <img src="logo192.png" alt="" width='60%'/>
            </Link>

            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link to="/products" className='nav-link'>Products</Link></li>
                    <li className='nav-item'><Link to="/trello" className='nav-link'>Trello</Link></li>
                    <li className='nav-item'><Link to="/counter" className='nav-link'>Counter</Link></li>
                    <li className='nav-item'><Link to="/posts" className='nav-link'>Posts</Link></li>
                    <li className='nav-item'><Link to="/plugins" className='nav-link'>Plugins</Link></li>
                    <li className='nav-item'><Link to="/hooks" className='nav-link'>Hooks</Link></li>
                    <li className='nav-item'><Link to="/flickr" className='nav-link'>Flickr</Link></li>
                    <li className='nav-item'><Link to="/counterRedux" className='nav-link'>Counter with redux</Link></li>
                    <li className='nav-item'><Link to="/LessonReakt2" className='nav-link'>Grant</Link></li>

                </ul>
            </div>

        </div>
    );
};

export default NavigationBar;