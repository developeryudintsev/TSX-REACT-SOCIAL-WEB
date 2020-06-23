import React from 'react';
import s from "./Dialogs.module.css";
import DilogItem from "./DialogIteam/DialogsIteam";
import Messages from "./Message/Message";
import {NavLink} from 'react-router-dom';

type TypePropsString={
    name:string,
    id:number,
}

let Dialogs = (props:TypePropsString) => {

    let dealogsData = [
        {id: 1, name: 'Dimach'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Nadzeika'},
    ]

    let massageData = [
        {id: 1, massage: 'Hi'},
        {id: 2,massage: 'How are you'},
        {id: 3,massage: 'yoo'},
        {id: 4,massage: 'yoo'},
        {id: 5, massage: 'yoo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dealogsData.map(m=><DilogItem id={m.id} name={m.name}/>)}
            </div>

            <div className={s.messages}>
                {massageData.map(m=> <Messages name={m.massage} id={m.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs;