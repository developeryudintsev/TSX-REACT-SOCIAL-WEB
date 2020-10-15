import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

export type idialogs = {
    id: number,
    name: string
}
export type imessages = {
    id: number,
    message: string
}
export type idialogsPage = {
    messages: Array<imessages>
    dialogs: Array<idialogs>,
    newMessageBody: string

}
export type iposts = {
    id: number,
    message: string,
    likesCount: number
}
export type iprofilePage = {
    posts: Array<iposts>
    newPostText: string
}
export type isidebar = {}
export type istate = {
    profilePage: iprofilePage,
    dialogsPage: idialogsPage,
    sidebar: isidebar
}
export type StoreType = {
    _state: istate
    _callSubscriber: (state: istate) => void
    subscribe: (observer: (state: istate) => void) => void
    getState: () => istate
    dispatch: (action: ActionsTypes) => void
}
export type AddPostActionType = {
    type: 'ADD-POST',
}
export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type updateNewMessageBodyType = {
    type: 'update-New-Message-Body'
    body: string
}

export type SendMessageType = {
    type: 'Send-Message'
}

export type ActionsTypes = AddPostActionType | updateNewPostTextActionType | updateNewMessageBodyType | SendMessageType



let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 10},
                {id: 2, message: 'How are you?', likesCount: 100},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yoo'},
                {id: 4, message: 'How are you?'},
                {id: 5, message: 'Yoo'},
            ],
            dialogs: [
                {id: 1, name: 'Dimach'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Olga'},
                {id: 5, name: 'Nadzeika'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber(state: istate) {
        console.log('rerenderEntireTree');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: (state: istate) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}


export default store;

//===================================
// import React from 'react';
// import profileReducer from "./profile-reducer";y

// const addPost = 'ADD-POST';
// const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
// const updateNewMessageBody = 'update-New-Message-Body';
// const SendMessage = 'Send-Message';
//
// export type idialogs = {
//     id: number,
//     name: string
// }
// export type imessages = {
//     id: number,
//     message: string
// }
// export type idialogsPage = {
//     messages: Array<imessages>
//     dialogs: Array<idialogs>,
//     newMessageBody:string
//
// }
// export type iposts = {
//     id: number,
//     message: string,
//     likesCount: number
// }
// export type iprofilePage = {
//     posts: Array<iposts>
//     newPostText: string
// }
// export type isidebar = {}
// export type istate = {
//     profilePage: iprofilePage,
//     dialogsPage: idialogsPage,
//     sidebar: isidebar
// }
// export type StoreType = {
//     _state: istate
//     _callSubscriber: (state: istate) => void
//     subscribe: (observer: (state: istate) => void) => void
//     getState: () => istate
//     dispatch: (action: ActionsTypes) => void
// }
// type AddPostActionType = {
//     type: 'ADD-POST',
// }
// type updateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText:string
// }
//
// type updateNewMessageBodyType={
//     type: 'update-New-Message-Body'
//     body:string
// }
//
// type SendMessageType={
//     type: 'Send-Message'
// }
//
// export type ActionsTypes=AddPostActionType|updateNewPostTextActionType|updateNewMessageBodyType|SendMessageType
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi', likesCount: 10},
//                 {id: 2, message: 'How are you?', likesCount: 100},
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Yoo'},
//                 {id: 4, message: 'How are you?'},
//                 {id: 5, message: 'Yoo'},
//             ],
//             dialogs: [
//                 {id: 1, name: 'Dimach'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Igor'},
//                 {id: 4, name: 'Olga'},
//                 {id: 5, name: 'Nadzeika'},
//             ],
//             newMessageBody:''
//         },
//         sidebar: {}
//     },
//     _callSubscriber(state: istate) {
//         console.log('rerenderEntireTree');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: (state: istate) => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this._state=profileReducer(this._state,action)
//         this._state=profileReducer(this._state,action)
//         this._state=profileReducer(this._state,action)
//
//         if (action.type === addPost) {
//             let newPost = {
//                 id: 5,
//                 message: this._state.profilePage.newPostText,
//                 likesCount: 0
//             }
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = '';
//             this._callSubscriber(this._state)
//         }
//         else if(action.type===updateNewPostText){
//             this._state.profilePage.newPostText = action.newText
//             this._callSubscriber(this._state);
//         }else if(action.type==updateNewMessageBody){
//             this._state.dialogsPage.newMessageBody=action.body;
//             this._callSubscriber(this._state);
//         }else if(action.type=SendMessage){
//             let body=this._state.dialogsPage.newMessageBody;
//             this._state.dialogsPage.newMessageBody='';
//             this._state.dialogsPage.messages.push({id: 6, message:body});
//             this._callSubscriber(this._state)
//         }
//     }
// }
//
// export let addPostActionCreator=()=>{
//     return{
//         type: addPost
//     }
// }
// export let newPostElementCreator = (text:string) => {
//     return {
//         type: updateNewPostText,
//         newText: text
//
//     }
// }
//
// export let sendMessageCreator = ():SendMessageType => {
//     return {
//         type: SendMessage
//     }
// }
// export let updateNewMessageBodyCreator = (body:string):updateNewMessageBodyType => {
//     return {
//         type: updateNewMessageBody,
//         body: body
//     }
// }
//
// export default store;