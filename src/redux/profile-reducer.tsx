import {ActionsTypes, iprofilePage, istate} from "./store";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState= {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100},
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: iprofilePage=initialState, action: ActionsTypes) => {

    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;

        case updateNewPostText:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
   }
export let addPostActionCreator = () => {
    return {
        type: addPost
    }
}
export let newPostElementCreator = (text: string) => {
    return {
        type: updateNewPostText,
        newText: text

    }
}

export default profileReducer;

//==================================
// import {ActionsTypes, istate} from "./state";
//
// const addPost = 'ADD-POST';
// const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
//
// const profileReducer = (state: istate, action: ActionsTypes) => {
//     if (action.type === addPost) {
//         let newPost = {
//             id: 5,
//             message: state.profilePage.newPostText,
//             likesCount: 0
//         }
//         state.profilePage.posts.push(newPost)
//         state.profilePage.newPostText = '';
//
//     } else if (action.type === updateNewPostText) {
//         state.profilePage.newPostText = action.newText
//     }
//     return state
// }
// export default profileReducer;