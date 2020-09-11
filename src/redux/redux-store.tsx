import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import {iprofilePage,idialogsPage,isidebar} from "./store";


export type combineReducersType = {
    profilePage: iprofilePage
    dialogsPage:idialogsPage
    sidebar:isidebar
}
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
});

let store = createStore(reducers);

export type ReduxStoreType = typeof store


export default store;