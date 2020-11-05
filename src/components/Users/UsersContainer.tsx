import {initialStateType} from "./UsersAPIComponent";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component<initialStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
            console.log(response)
        })
    }
    onPageChange=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return (
            <Users pageSize={this.props.pageSize} totalUserscount={this.props.totalUserscount} onPageChange={this.onPageChange} currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} users={this.props.users}/>
        )
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);