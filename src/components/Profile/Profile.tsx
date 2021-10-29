import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {profileType} from "../../redux/profile-reducer";

type propsType = {
    profile:profileType
    owner:boolean
    status:string
    updateStatus:any
    savePhoto:any
 }

const Profile = ({profile,owner,status,updateStatus,savePhoto}:propsType) => {
    return (
        <div>
            <ProfileInfo savePhoto={savePhoto} owner={owner} profile={profile}  status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;











