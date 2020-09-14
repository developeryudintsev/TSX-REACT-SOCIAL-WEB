import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// export type iposts={
//     id:number,
//     message:string,
//     likesCount:number
// }
// export type iprofilePage={
//     posts:Array<iposts>
//     newPostText:string
// }
// type profileState={
//     profilePage:iprofilePage,
//      dispatch:(action:ActionsTypes)=>void
// }

// type storeType={
//     store:createStoreType
// }

const Profile = () => {//мы убрали props так как больше нечего не передоём
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;

