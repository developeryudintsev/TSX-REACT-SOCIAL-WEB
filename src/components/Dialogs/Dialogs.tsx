import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';

let Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.active}><NavLink to={'/dialogs/1'} className={s.LinkD}>Dimych</NavLink></div>
                <div className={s.dialog}>
                    <NavLink className={s.Link} to={'/dialogs/2'}> Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.Link} to={'/dialogs/3'}>Igor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.Link} to={'/dialogs/4'}>Olga </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.Link} to={'/dialogs/5'}>Nadzeika </NavLink></div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yoo</div>
            </div>
        </div>
    )
}

//16.06.2020-new folders

export default Dialogs;