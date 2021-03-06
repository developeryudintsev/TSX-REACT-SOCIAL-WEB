import {usersAPI} from "../api/api";
import {Dispatch} from "react";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type initialStateType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}
export type usersType = {
    id: number
    photos: {
        small: string,
        large: string
    },
    followed: boolean
    name: string,
    status: string,
    location: { city: string, country: string }
}

let initialState: initialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state: initialStateType = initialState, action: FollowActionType |
    UnFollowActionType | SetUsersActionType | setCurrentPageAC | setTotalUsersCountAC |
    toggleIsFetchingACType | toggleFollowingProgressACType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userID) {
                        return {...m, followed: true}
                    }
                    return m;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userID) {
                        return {...m, followed: false}
                    }
                    return m;
                })
            };
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            debugger
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
}

export type FollowActionType = {
    type: 'FOLLOW',
    userID: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW',
    userID: number
}
export type SetUsersActionType = {
    type: 'SET_USERS',
    users: Array<usersType>
}
export type setCurrentPageAC = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
export type setTotalUsersCountAC = {
    type: 'SET_TOTAL_USERS_COUNT',
    count: number
}
export type toggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
}
export type toggleFollowingProgressACType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching: boolean
    userID: number
}
type actionTypes =
    toggleIsFetchingACType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetUsersActionType
    | setCurrentPageAC
    | setTotalUsersCountAC
    | toggleFollowingProgressACType

export let followSuccess = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export let unfollowSuccess = (userID: number): UnFollowActionType => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export let setUsers = (users: Array<usersType>): SetUsersActionType => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage: number): setCurrentPageAC => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})
export let setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAC => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export let toggleIsFetching = (isFetching: boolean): toggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export let toggleFollowingProgress = (isFetching: boolean, userID: number): toggleFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userID: userID
})
export const getUsers = (currentPage: number, pageSize: number) => {
    return (
        (dispatch: Dispatch<actionTypes>, getState: () => AppStateType) => {
            getState()
            dispatch(toggleIsFetching(true));
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
        }
    )
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch<actionTypes>, getState: () => AppStateType) => {
        dispatch(toggleFollowingProgress(false, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<actionTypes>, getState: () => AppStateType) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;
