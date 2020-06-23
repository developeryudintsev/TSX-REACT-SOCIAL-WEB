import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";

 type AppgeneralType={
    dialogs:Array<iAppDialog>,
    messages:Array<iAppMessage>,
     posts:Array<iAppPosts>
}

type iAppDialog = {
    id: number,
    name: string
}

type iAppMessage = {
    id:number,
    message: string
}

type iAppPosts={
     id:number,
    message:string,
    likesCount:number
}

const App = (props:AppgeneralType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs AppDialogs={props.dialogs} AppMessages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile AppPosts={props.posts} />}/>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;