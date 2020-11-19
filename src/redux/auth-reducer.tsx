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


const authReducer = (state:initialStateType = initialState, action: setUserDataACType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            console.log('dfsdfппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппп')
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
export default authReducer;