const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";

export type initialStateType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching:boolean
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
    currentPage:1,
    isFetching:true
}

const usersReducer = (state: initialStateType = initialState, action: FollowActionType |
    UnFollowActionType | SetUsersActionType | setCurrentPageAC|setTotalUsersCountAC|
    toggleIsFetchingACType): initialStateType => {
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
            return {...state, users: [ ...action.users]}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUsersCount:action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
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
export let follow = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export let unfollow = (userID: number): UnFollowActionType => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export let setUsers = (users: Array<usersType>) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export let setTotalUsersCount = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export let toggleIsFetching=(isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching:isFetching})
export default usersReducer;
