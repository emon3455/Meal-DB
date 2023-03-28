import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <>

           <header className='header'>

                <h2 className='title'><span>Meal</span>DB</h2>

                <nav>
                    <li>Home</li>
                    <li>About</li>
                    <li>Selected</li>
                    <li>Contact</li>
                </nav>

           </header>

        </>
    );
};

export default Header;