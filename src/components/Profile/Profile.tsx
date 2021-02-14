import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {profileType} from "../../redux/profile-reducer";

type propsType = {
    profile:profileType
    status:string
    updateStatus:any
 }

const Profile = (props:propsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;
