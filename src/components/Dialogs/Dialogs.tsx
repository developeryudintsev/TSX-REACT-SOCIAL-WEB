import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type dialogs={
    id:number,
    name:string
}

type messages = {
    id:number,
    message:string
}

type generalType={
    dialogs:Array<dialogs>,
    messages:Array<messages>
}

type DialogGeneralState={
    AppGeneralStateForDialogs:generalType
}

let Dialogs = (props: DialogGeneralState) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                          {props.AppGeneralStateForDialogs.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {props.AppGeneralStateForDialogs.messages.map(m => <Message message={m.message} id={m.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs;