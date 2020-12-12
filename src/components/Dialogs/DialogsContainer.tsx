import React from 'react';
import {Dispatch} from 'redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { istate} from "../../redux/store";
import {initialStateType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type DialogsContainerType={
    state:istate
    auth:initialStateType
}


const mapStatetoProps=(state:AppStateType)=>{
      return{
        dialogsPage:state.dialogsPage,
        isAuth: state.auth.isAuth
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


