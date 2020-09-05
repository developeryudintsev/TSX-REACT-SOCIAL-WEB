import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/store";

export type iposts={
    id:number,
    message:string,
    likesCount:number
}
export type iprofilePage={
    posts:Array<iposts>
    newPostText:string
}
type profileState={
    profilePage:iprofilePage,
     dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:profileState) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePosts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                        dispatch={props.dispatch}
            />
            </div>
    )
}


export default Profile;

