const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type initialStateType = {
    users: Array<usersType>,
    pageSize:number,
    totalUserscount:number
    currentPage:number
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
    pageSize:100,
    totalUserscount:0,
    currentPage:4
}

type actionType=    FollowActionType | UnFollowActionType | SetUsersActionType|SetUsersPageActionType|setTotalUsersCounActionType

const usersReducer = (state= initialState, action: actionType): initialStateType => {
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUserscount:action.count}
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
export type SetUsersPageActionType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
export type setTotalUsersCounActionType = {
    type: 'SET_TOTAL_USERS_COUNT',
    count: number
}

export let followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export let unfollowAC = (userID: number): UnFollowActionType => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export let setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users})
export let setCurrentPageAC = (currentPage:number):SetUsersPageActionType => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export let setTotalUsersCountAC = (totalUsersCount:number):setTotalUsersCounActionType => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})

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
