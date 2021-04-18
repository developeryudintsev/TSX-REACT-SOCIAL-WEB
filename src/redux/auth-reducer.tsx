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
                ...action.payload,
                // isAuth: true
            }
        default:
            return state;
    }
}
type setUserDataACType = {
    type: 'SET_USER_DATA',
    payload: initialStateType
}
export const setAuthUserDataAC = (id:number | null,email:string | null,login:string | null,isAuth:boolean): setUserDataACType =>
    ({
        type: SET_USER_DATA,
         payload: {id,email,login,isAuth}
    })
export const getAuthUserData=()=>(dispatch:any)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id,email,login,true)) ;
                // dispatch(setAuthUserDataAC(response.data.data)) ;
            }
        })
}

export const login=(email:string,password:string,rememberMe:boolean)=>(dispatch:any)=>{
    authAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
              dispatch(getAuthUserData())//диспатчим санку которая регает
            }
        })
}

export const logout=()=>(dispatch:any)=>{
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null,null,null,false))//зануляем все значения
            }
        })
}
export default authReducer;

