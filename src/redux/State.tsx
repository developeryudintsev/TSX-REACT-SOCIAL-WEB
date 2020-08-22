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


export type ActionsTypes =
    AddPostActionType
    | updateNewPostTextActionType
    | updateNewMessageBodyActionType
    | updateSendMessageBodyActionType


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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === UP_DATS_NEWMESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state)
        }
    }
}

const ADD_POST = 'ADD-POST'
const UP_DATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UP_DATS_NEWMESSAGE_BODY = 'update-New-Message-Body';
const SEND_MESSAGE = 'Send-Message';

type AddPostActionType = {
    type: typeof ADD_POST
}
type updateNewPostTextActionType = {
    type: typeof UP_DATE_NEW_POST_TEXT
    newText: string
}
type updateNewMessageBodyActionType = {
    type: typeof UP_DATS_NEWMESSAGE_BODY
    body: string
}
type updateSendMessageBodyActionType = {
    type: typeof SEND_MESSAGE
}

export let addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export let newPostElementCreator = (text: string):updateNewPostTextActionType => {
    return {
        type: UP_DATE_NEW_POST_TEXT,
        newText: text
    }
}

export let updateNewMessageBodyCreator = (body: string):updateNewMessageBodyActionType => {
    return {
        type: UP_DATS_NEWMESSAGE_BODY,
        body: body
    }
}

export let sendMessageCreator = ():updateSendMessageBodyActionType => {
    return {
        type: SEND_MESSAGE
    }
}

export default store;
