import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from 'react-router-dom';

type TypePropsString={
    name:string,
    id:number,
}

const  DilogItem=(props:TypePropsString)=>{
    return(
        <div className={s.active}><NavLink to={'/dialogs/'+props.id} className={s.LinkD}>{props.name}</NavLink></div>
    )
}

export default DilogItem;