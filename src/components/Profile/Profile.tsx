import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { profileType } from '../../redux/profile-reducer';
type propsType={
    profile:profileType
}

const Profile = (props:propsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;

