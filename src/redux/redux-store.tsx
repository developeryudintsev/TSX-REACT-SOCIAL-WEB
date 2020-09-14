import {combineReducers, createStore, Store} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
});
let store: Store = createStore(reducers);//типизацыя из redux для Store

export type AppStateType = ReturnType<typeof reducers>//это типизацыя state всего приложения

export default store;

