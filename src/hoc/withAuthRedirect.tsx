import React from 'react';
import {Redirect}from "react-router-dom";
import {DialogGeneralState} from "../components/Dialogs/Dialogs";
import {
    MapDispatchPropsType,
    MapStateToPropsType,
    RouteComponentPropsType
} from "../components/Profile/ProfileContainer";

type withAuthRedirectType=DialogGeneralState|RouteComponentPropsType & MapStateToPropsType & MapDispatchPropsType

// type RedirectComponentType={
//     getUserProfile:(userId: any)=>void
//     // history:any
//     isAuth:boolean
//     // location:any
//     // match:any
//     profile:any
//     // staticContext:any
// }

export const withAuthRedirect=(Component:any)=>{
   debugger
    function RedirectComponent(props:any) {
       debugger
        if (props.isAuth == false) return <Redirect to={'/Login'}/>
        return <Component {...props}/>
        }
    return RedirectComponent

}
