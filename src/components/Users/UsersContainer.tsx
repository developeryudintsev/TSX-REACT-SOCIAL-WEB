import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    usersType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    GetUsers
} from "../../redux/users-selectors";


export type initialStateType = {
    users: Array<usersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setCurrentPage: (currentPage: number) => void,
    isFetching: boolean
    followingInProgress: Array<any>
    getUsers: (currentPage: number, pageSize: number) => void

}

class UsersContainer extends React.Component<initialStateType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    pageSize={this.props.pageSize}
                    totalUserscount={this.props.totalUsersCount}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

// function mapStateToProps(state: AppStateType) {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

//делаем все тоже самое только-доступ к стейту через функцию
function mapStateToProps(state: AppStateType) {
    return {
        users: GetUsers(state),//назв.функции совпадает с экшеном!!!!
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers}))
(UsersContainer)

















