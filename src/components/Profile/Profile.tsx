import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../App";

type IpropfilePosts={
    appStateP:IpropfileType
}

type IpropfileType={
    posts:Array<iProfilePosts>
}

type iProfilePosts = {
    id: number,
    message: string,
    likesCount: number
}

const Profile = (props: IpropfilePosts) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts propfilePosts={props.appStateP.posts}/>

        </div>
    )
}


export default Profile;

