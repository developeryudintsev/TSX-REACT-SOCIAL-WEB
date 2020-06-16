import React from 'react';
import  s from './Header.module.css';

const Header=()=>{
    return<>
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/170px-Apple_logo_white.svg.png'/>
        </header>
    </>
}

export default Header;