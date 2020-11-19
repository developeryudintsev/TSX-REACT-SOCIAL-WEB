import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {usersType} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {profileType} from "../../redux/profile-reducer";

type propsType = {
    profile:profileType
}

const Profile = (props:propsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;

