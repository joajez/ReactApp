import React from 'react';
import './Menu.css';


const Header = () => {

    return (
        <div className='menu'>
            <ul className='menu-list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Create Flashcard Folder</a></li>
                <li><a href="#">Ideas</a></li>
            </ul>
        </div>
  );
};

export default Header;
