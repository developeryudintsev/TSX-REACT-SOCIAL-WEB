import {ActionsTypes, AddPostActionType, iprofilePage, setStatusAC, setUserProfileActionType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

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
        owner:boolean
        savePhoto:any
        updateStatus: (status:string)=>void
    }

const addPost = 'ADD-POST';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100},
    ],
    // newPostText: 'it-kamasutra.com',
    profile: null,
    status: ''
}

const profileReducer = (state: iprofilePage = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
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
        case SET_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile,photos:action.photos}}
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (newPostText:string): AddPostActionType => {
    return {
        type: addPost,
        newPostText
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
export let savePhotoSuccess = (photos: string) => {
    return {
        type: 'SET_PHOTO_SUCCESS',
        photos
    }
}
export const getUserProfile =  (userId: any) => async (dispatch: any) => {
    let response=await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
//создаем санку
export let getStatus = (userId: number) => async (dispatch: any) => {
    let response=await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}
export let updateStatus = (status: string) => async(dispatch: any) => {
    let response=await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export let savePhoto = (file: string) => async(dispatch: any) => {
    let response=await profileAPI.savePhoto(file)
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
}
// export let newPostElementCreator = (text: string): updateNewPostTextActionType => {
//     return {
//         type: updateNewPostText,
//         newText: text
//     }
// }
export default profileReducer;

