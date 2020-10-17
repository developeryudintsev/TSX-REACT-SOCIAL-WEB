import Users from "./UsersС";
import {connect} from "react-redux";
import {Dispatch, Store} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, unfollowAC, setUsersAC, usersType} from "../../redux/users-reducer";


function mapStateToProps(state: AppStateType) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)