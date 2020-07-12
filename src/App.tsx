import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export  type profilePageType = {
    posts: Array<postsType>
}
export  type messagesType = {
    id: number,
    message: string
}
export type dialogsType = {
    id: number,
    name: string
}
export type dialogsPageType = {
    messages: Array<messagesType>,
    dialogs: Array<dialogsType>
}
export type sidebarType = {}
export type istate = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sidebar: sidebarType
}

type AppStateType = {
    state: istate,
    addProps:(propsML:string)=>void
}

const App = (props: AppStateType) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs appStateD={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile appStateP={props.state.profilePage} addPost={props.addProps}/>}/>

            </div>
        </div>
    );
}

export default App;