import React from 'react';
import {Dispatch} from 'redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { istate} from "../../redux/store";



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


