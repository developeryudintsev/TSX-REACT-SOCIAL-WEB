import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {WithSuspence} from "./hoc/withSuspense";

// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'))
const ProfileContainer=React.lazy(()=>import('./components/Profile/ProfileContainer'))

export type initialStateTypes = {
    initializeApp: () => void
    initialized: AppStateType
}

class App extends React.Component <initialStateTypes> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        //будем возвращать только когда проинициализировались
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => {
                        //@ts-ignore
                        return  WithSuspence('DialogsContainer')
                    }}/>
                    <Route path='/profile/:userId?' render={() =>{
                        //@ts-ignore
                        return  WithSuspence('ProfileContainer')
                    } }/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App) as React.ComponentClass;

