import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import store, {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

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
    // newMessagesBody:string
}

type DialogGeneralState={
    AppGeneralStateForDialogs:generalType
}

let Dialogs = (props: DialogGeneralState) => {
    let newMessageBody=store._state.dialogsPage.newMessageBody

    let onSendMessageClick=()=>{
        store.dispatch(sendMessageCreator())
    }
    let OnChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body=e.currentTarget.value
        store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                          {props.AppGeneralStateForDialogs.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {props.AppGeneralStateForDialogs.messages.map(m => <Message message={m.message} id={m.id}/>)}
                <div>
                    <div><textarea onChange={OnChangeHandler} value={newMessageBody} placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;