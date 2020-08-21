import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import {ActionsTypes} from "./redux/state";

export type idialogs = {
    id: number,
    name: string
}
export type imessages = {
    id: number,
    message: string
}
export type idialogsPage = {
    messages: Array<imessages>
    dialogs: Array<idialogs>,
}
export type iposts = {
    id: number,
    message: string,
    likesCount: number
}
export type iprofilePage = {
    posts: Array<iposts>
    newPostText: string
}
export type isidebar = {}
export type Apstate = {
    profilePage: iprofilePage,
    dialogsPage: idialogsPage,
    sidebar: isidebar
}

type generalState = {
    state: Apstate,
    dispatch:(action:ActionsTypes)=>void
}


const App = (props: generalState) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs AppGeneralStateForDialogs={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                     dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    );
}

export default App;
