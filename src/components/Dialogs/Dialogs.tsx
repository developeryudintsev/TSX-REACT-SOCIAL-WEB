import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import {idialogsPage, StoreType} from '../../redux/store'
import {Store} from 'redux'

type DialogGeneralState = {
    dialogsPage:idialogsPage
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
    store:Store //типизацыя из redux для Store
}

let Dialogs = (props: DialogGeneralState) => {

    let state = props.dialogsPage
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value;
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                <div>{state.messages.map(m => <Message message={m.message} id={m.id}/>)}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
