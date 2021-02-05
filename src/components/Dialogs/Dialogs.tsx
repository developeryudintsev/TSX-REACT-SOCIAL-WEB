import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {idialogsPage} from '../../redux/store'
import { Redirect } from 'react-router-dom';


export type DialogGeneralState = {
    dialogsPage:idialogsPage
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
    isAuth:boolean
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
    if(props.isAuth==false)return <Redirect to={'/Login'}/>
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
