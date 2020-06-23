import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type IpropfilePosts={
    AppPosts:Array<iProfilePosts>
}

type iProfilePosts={
    id:number,
    message:string,
    likesCount:number
}

const Profile = (props:IpropfilePosts) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts propfilePosts={props.AppPosts}/>
        </div>
    )
}


export default Profile;

