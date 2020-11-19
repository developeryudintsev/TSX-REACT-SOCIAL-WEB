import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileType, propsProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import { RouteComponentProps, withRouter } from 'react-router-dom';



type PathParamsType={
    userId:string
}
export type initialProfileStateType = MapStateToPropsType & MapDispatchPropsType;
type RouteComponentPropsType=RouteComponentProps<PathParamsType> & initialProfileStateType
export type MapStateToPropsType = {
    profile: profileType
}
export type MapDispatchPropsType={
    setUserProfile: (profile: profileType) => void
}

class ProfileContainer extends React.Component<RouteComponentPropsType> {
    componentDidMount() {
        let userId=this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): propsProfileType=> ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

//===================================================
// import React from 'react';
// import Profile from "./Profile";
// import {connect} from "react-redux";
// import {profileType, propsProfileType, setUserProfile} from "../../redux/profile-reducer";
// import {AppStateType} from "../../redux/redux-store";
// import axios from "axios";
// import { RouteComponentProps, withRouter } from 'react-router-dom';
//
//
//
// type PathParamsType={
//     userId:string
// }
// export type initialProfileStateType = MapStateToPropsType & MapDispatchPropsType;
// type RouteComponentPropsType=RouteComponentProps<PathParamsType> & initialProfileStateType
// export type MapStateToPropsType = {
//     profile: profileType
// }
// export type MapDispatchPropsType={
//     setUserProfile: (profile: profileType) => void
// }
//
// class ProfileContainer extends React.Component<RouteComponentPropsType> {
//     componentDidMount() {
//         let userId=this.props.match.params.userId;
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             })
//     }
//
//     render() {
//         return (
//             <div>
//                 <Profile {...this.props}
//                          profile={this.props.profile}
//                 />
//             </div>
//         )
//     }
// }
//
//
// let mapStateToProps = (state: AppStateType): propsProfileType=> ({
//     profile: state.profilePage.profile
// })
//
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);