import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: string | null,
    isAuth: boolean,
}
const Header = (props:HeaderType) => {
    return <>
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/170px-Apple_logo_white.svg.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?props.login
                    :<NavLink  to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </>
}

export default Header;