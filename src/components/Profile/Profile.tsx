import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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
    addPosts:()=>void;
    updateNewPostText:(newText:string)=>void;
}

const Profile = (props:profileState) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePosts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPosts={props.addPosts}
                     updateNewPostText={props.updateNewPostText}
            />
            </div>
    )
}


export default Profile;

