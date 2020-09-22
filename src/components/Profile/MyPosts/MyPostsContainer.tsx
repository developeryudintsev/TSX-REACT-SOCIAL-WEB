import React from 'react';
import {addPostActionCreator, newPostElementCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { connect } from 'react-redux';
import {istate} from "../../../redux/store";
import {Dispatch} from 'redux'

// type storeType = {
//     store: createStoreType
// }

// const MyPostsContainer = () => {//мы убрали props так как store из контехта 15cт.
//
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 let onPostChange = (text: string) => {
//                     let action = newPostElementCreator(text);
//                     store.dispatch(action)
//                 }
//              return(
//                     <MyPosts updateNewPostText={onPostChange}
//                              addPost={addPost}
//                              posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStatetoProps=(state:istate)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        updateNewPostText:(text:string)=>{
            let action = newPostElementCreator(text)
            dispatch(action);
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }

    }
}


const MyPostsContainer=connect(mapStatetoProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


