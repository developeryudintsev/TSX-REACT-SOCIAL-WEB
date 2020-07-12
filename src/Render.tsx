import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {profilePageType} from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPosts} from "./redux/State";
import {BrowserRouter} from "react-router-dom";
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

type StateType={
    state:istate
}

export let renderTree=(state:istate)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App  state={state} addProps={addPosts} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
