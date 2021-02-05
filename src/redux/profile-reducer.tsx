import {
    ActionsTypes,
    AddPostActionType,
    iprofilePage,
    setUserProfileActionType,
    updateNewPostTextActionType
} from "./store";
import {usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";


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
    isAuth:boolean
}
export type propsProfileType =
    {
        profile: profileType,
        }

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
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

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export let newPostElementCreator = (text: string): updateNewPostTextActionType => {
    return {
        type: updateNewPostText,
        newText: text
    }
}

export default profileReducer;
