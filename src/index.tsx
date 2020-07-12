import React from 'react';
import * as serviceWorker from './serviceWorker';
// import renderTree from './Render';
import ReactDOM, {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {profilePageType} from "./App";
import state, {addPosts,istate} from "./redux/State";


export let renderTree=(props:istate)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App  state={props} addProps={addPosts} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
