import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/State";
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree=(state:any)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store._state}
                     addPosts={store.addPosts.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store._state);
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
