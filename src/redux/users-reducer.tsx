const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type initialStateType = {
    users: Array<usersType>
}
export type usersType = {
    id: number
    photos: {
        small: string,
        large: string
    },
    followed: boolean
    name: string,
    // fullName: string
    // photoUrl:string
    status: string,
    location: { city: string, country: string }
}

let initialState: initialStateType = {
    users: [],
}

const usersReducer = (state: initialStateType = initialState, action: FollowActionType |
    UnFollowActionType | SetUsersActionType): initialStateType => {
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
            return {...state, users: [...state.users, ...action.users]}
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

export let followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export let unfollowAC = (userID: number): UnFollowActionType => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export let setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users})

export default usersReducer;
//=========================================================================================
// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';
//
// export type initialStateType={
//     users:Array<usersType>
// }
// export type usersType = {
//     id: number
//     fullName: string
//     photoUrl:string
//     followed:boolean
//     status: string,
//     location: { city: string, country: string }
// }
//
// let initialState:initialStateType = {
//     users: [],
// }
//
// const usersReducer = (state: initialStateType = initialState, action: FollowActionType|
//     UnFollowActionType|SetUsersActionType):initialStateType => {
//     switch (action.type) {
//         case FOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(m => {
//                     if(m.id===action.userID){
//                         return {...m,followed:true}
//                     }
//                     return m;
//                 })
//             };
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(m => {
//                     if(m.id===action.userID){
//                         return {...m,followed:false}
//                     }
//                     return m;
//                 })
//             };
//         case SET_USERS:{
//             return {...state,users:[...state.users, ...action.users]}
//         }
//         default:
//             return state;
//     }
// }
//
// export type FollowActionType = {
//     type: 'FOLLOW',
//     userID:number
// }
// export type UnFollowActionType = {
//     type: 'UNFOLLOW',
//     userID:number
// }
// export type SetUsersActionType = {
//     type: 'SET_USERS',
//     users:Array<usersType>
// }
//
// export let followAC = (userID:number):FollowActionType => ({type: FOLLOW,userID})
// export let unfollowAC = (userID:number):UnFollowActionType => {
//     return {
//         type: UNFOLLOW,
//         userID
//     }
// }
// export let setUsersAC = (users:Array<usersType>) => ({type: SET_USERS, users})
//
// export default usersReducer;
