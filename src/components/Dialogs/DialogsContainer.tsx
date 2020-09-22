import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {istate} from "../../redux/store";
import {Dispatch} from 'redux'

// let DialogsContainer = () => {//мы убрали props так как store из контехта 22cт.
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state =store.getState().dialogsPage
//
//                     let newMessageBody = state.newMessageBody
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//                     let updateNewMessageBody = (body: string) => {
//
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }
//                     return (<Dialogs sendMessage={onSendMessageClick}
//                                      updateNewMessageBody={updateNewMessageBody}
//                                      store={store}
//                                      dialogsPage={state}
//                     />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStatetoProps=(state:istate)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}



let DialogsContainer = connect(mapStatetoProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;