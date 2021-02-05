import React from 'react';
import {Dispatch} from 'redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import Dialogs, {DialogGeneralState} from "./Dialogs";
import {connect} from "react-redux";
import { istate} from "../../redux/store";
import {initialStateType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type DialogsContainerType={
    state:istate
    auth:initialStateType
}


const mapStatetoProps=(state:AppStateType)=>{
      return{
        dialogsPage:state.dialogsPage,
          //теперь это не нужно
        //isAuth: state.auth.isAuth
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

let AuthRedirectComponent=withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStatetoProps,mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer;


