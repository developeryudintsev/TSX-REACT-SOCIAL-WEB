import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsGeneralType={
    AppDialogs:Array<iAppDialog>,
    AppMessages:Array<iAppMessage>,
}

type iAppDialog = {
    id: number,
    name: string
}

type iAppMessage = {
    id:number,
    message: string
}

let Dialogs = (props:DialogsGeneralType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.AppDialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {props.AppMessages.map(m => <Message name={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;