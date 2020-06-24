import React from 'react';

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export  type profilePageType = {
    posts: Array<postsType>
}

export  type messagesType = {
    id: number,
    message: string
}
export type dialogsType = {
    id: number,
    name: string
}
export type dialogsPageType = {
    messages: Array<messagesType>,
    dialogs: Array<dialogsType>
}

export type sidebarType = {}

export type istate = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sidebar: sidebarType
}

let state: istate = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'How are you?', likesCount: 100},
        ],
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
}


export default state