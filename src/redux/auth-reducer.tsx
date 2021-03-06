import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
 let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: initialStateType = initialState, action: setUserDataACType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: initialStateType
}
export const setAuthUserDataAC = (data: initialStateType): setUserDataACType =>
    ({
        type: SET_USER_DATA,
        data: data
    })
export const getAuthUserData=()=>(dispatch:any)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(response.data.data)) ;
            }
        })
}
export default authReducer;

// import {authAPI} from "../api/api";
//
// const SET_USER_DATA = 'SET_USER_DATA';
//
// export type initialStateType = {
//     id: number | null,
//     email: string | null,
//     login: string | null,
//     isAuth: boolean
// }
// let initialState: initialStateType = {
//     id: null,
//     email: null,
//     login: null,
//     isAuth: false
// }
//
//
// const authReducer = (state: initialStateType = initialState, action: setUserDataACType): initialStateType => {
//     switch (action.type) {
//         case SET_USER_DATA:
//             return {
//                 ...state,
//                 ...action.data,
//                 isAuth: true
//             }
//         default:
//             return state;
//     }
// }
// type setUserDataACType = {
//     type: 'SET_USER_DATA',
//     data: initialStateType
// }
// export const setAuthUserDataAC = (data: initialStateType): setUserDataACType =>
//     ({
//         type: SET_USER_DATA,
//         data: data
//     })
// export const getAuthUserData=()=>(dispatch:any)=>{
//     authAPI.me()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let {id, email, login} = response.data.data;
//                 dispatch(setAuthUserDataAC(data)) ;
//             }
//         })
// }
// export default authReducer;