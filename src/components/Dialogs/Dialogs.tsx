import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsType, messagesType} from "../../App";

type DialogsGeneralType={
    appStateD:dialogsPageType

}

export type dialogsPageType = {
    messages: Array<messagesType>,
    dialogs: Array<dialogsType>
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
                {props.appStateD.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {props.appStateD.messages.map(m => <Message name={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;