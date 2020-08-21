import React from 'react';

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

type AddPostActionType = {
    type: 'ADD-POST',
}
type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText:string
}
export type ActionsTypes=AddPostActionType|updateNewPostTextActionType

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }
        else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        }
    }
}

export let addPostActionCreator=()=>{
    let ADDPOST='ADD-POST'
    return{
        type:ADDPOST
    }
}
export let newPostElementCreator = (text:string) => {
    let UPDATENEWPOSTTEXT = 'UPDATE-NEW-POST-TEXT';
    return {
        type: UPDATENEWPOSTTEXT,
        newText: text
    }
}
export default store;
