import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    usersType,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../../redux/users-reducer";


function mapStateToProps(state: AppStateType) {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserscount:state.usersPage.totalUserscount,
        currentPage:state.usersPage.currentPage
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
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)