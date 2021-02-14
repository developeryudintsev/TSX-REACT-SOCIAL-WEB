import {
    ActionsTypes,
    AddPostActionType,
    iprofilePage, setStatusAC,
    setUserProfileActionType,
    updateNewPostTextActionType
} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {number} from "prop-types";

type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type photosType = {
    small: string
    large: string
}
export type profileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
    isAuth: boolean
}

export type statusUpdateType = {
    resultCode: number
    messages: Array<string>,
    data: any
}




export type propsProfileType =
    {
        profile: profileType,
        status: string,
        updateStatus: (status:string)=>void
    }

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ''
}

const profileReducer = (state: iprofilePage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case  updateNewPostText: {
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.newText
            };
        }
        case  SET_STATUS: {
                     return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (): AddPostActionType => {
    return {
        type: addPost
    }
}
export let setUserProfile = (profile: profileType): setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export let setStatus = (status: string): setStatusAC => {
    return {
        type: SET_STATUS,
        status
    }
}
export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
//создаем санку
export let getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data))
    })
}
export let updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export let newPostElementCreator = (text: string): updateNewPostTextActionType => {
    return {
        type: updateNewPostText,
        newText: text
    }
}

export default profileReducer;
