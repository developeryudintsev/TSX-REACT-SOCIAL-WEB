import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type IpropfilePosts={
    appStateP:IpropfileType,
    addPost:(propsML:string)=>void;
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
            <MyPosts propfilePosts={props.appStateP.posts} addPost={props.addPost}/>

        </div>
    )
}


export default Profile;

