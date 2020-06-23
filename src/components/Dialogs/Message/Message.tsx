import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from 'react-router-dom';

type TypeString={
    name:string,
    id:number
}

const  Messages=(props:TypeString)=>{
    return <div className={s.message}>{props.name}</div>
}


export default Messages;