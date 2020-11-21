import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {initialStateType,setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


export type initialStateTypes = {
    login: string | null,
    isAuth: boolean,
    setAuthUserDataAC: (data: initialStateType) => void
}

class HeaderContainer extends React.Component<initialStateTypes> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserDataAC(response.data.data);
                }
            })
    }

    render() {
             return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);

////////////////////////////////////////////////////////
// import React from 'react';
// import s from './Header.module.css';
// import {NavLink} from "react-router-dom";
// import Header from "./Header";
// import axios from "axios";
// import {initialStateType, setAuthUserData} from "../../redux/auth-reducer";
// import {connect} from "react-redux";
// import {AppStateType} from "../../redux/redux-store";
//
//
// export type initialStateTypes = {
//     login: string | null,
//     isAuth: boolean,
//     setAuthUserData: (data: initialStateType) => void
// }
//
// class HeaderContainer extends React.Component<initialStateTypes> {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
//             {withCredentials: true})
//             .then(response => {
//                 if (response.data === 0) {
//                     let {id, email, login} = response.data.data;
//                     this.props.setAuthUserData(response.data);
//                 }
//             })
//     }
//
//     render() {
//         return <Header {...this.props}/>
//     }
// }
//
// const mapStateToProps = (state: AppStateType) => ({
//     isAuth: state.auth.isAuth,
//     login: state.auth.login
// });
// export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);