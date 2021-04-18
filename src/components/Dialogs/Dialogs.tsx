import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {idialogsPage} from '../../redux/store'
import {Redirect} from 'react-router-dom';
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from "redux-form";


export type DialogGeneralState = {
    dialogsPage: idialogsPage
    sendMessage: (newMessageBody:string) => void
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

let Dialogs = (props: DialogGeneralState) => {
    let state = props.dialogsPage
    // let newMessageBody = state.newMessageBody;
    // let onSendMessageClick = () => {     Больше не используем
    //     props.sendMessage();
    // }
                  //БОЛЬШЕ НЕ НУЖНЫ
    // let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = event.currentTarget.value;
    //     props.updateNewMessageBody(body)
    // }
    let addNewMassage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    }

    if (props.isAuth == false) return <Redirect to={'/Login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>
            <div className={s.messages}>
                <div>{state.messages.map(m => <Message message={m.message} id={m.id}/>)}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMassage}/>
                </div>
            </div>
        </div>
    )
}
type FormDataType = {
    newMessageBody: string
    onSubmit: () => void
}
let AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
