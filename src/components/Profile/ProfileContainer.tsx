import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {RouteComponentProps, withRouter } from 'react-router-dom';

export type initialStateType ={
    setUserProfile:(profile:profileType) =>void
    profile:profileType
}

type PathParamsType={
    userId:string
}


export  type MapStatePropsType={
    profile:profileType
}
export  type MapDispatchPropsType={
    setUserProfile: (profile: profileType) => void
}
 type OwnpropsType=MapDispatchPropsType&MapStatePropsType;

type PropsType=RouteComponentProps<PathParamsType>&OwnpropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId=this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps=(state:AppStateType)=>({
    profile:state.profilePage.profile
})

let WithUrlDataContainerComponent=withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile}) (WithUrlDataContainerComponent);

