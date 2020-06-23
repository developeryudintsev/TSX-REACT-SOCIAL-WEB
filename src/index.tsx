import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Dimach'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Nadzeika'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yoo'},
    {id: 4, message: 'How are you?'},
    {id: 5, message: 'Yoo'},
]

let posts = [
    {id: 1, message: 'Hi', likesCount: 10},
    {id: 2, message: 'How are you?', likesCount: 100},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
