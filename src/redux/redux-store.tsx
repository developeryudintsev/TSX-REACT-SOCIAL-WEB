import {combineReducers, applyMiddleware,createStore,Store} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer
});
export type AppStateType = ReturnType<typeof reducers>
let store: Store = createStore(reducers,applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store=store;
export default store;
