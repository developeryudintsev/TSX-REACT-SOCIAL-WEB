import React from 'react';
import {usersType} from "../../redux/users-reducer";
export type initialStateType = {
    users: Array<usersType>,
    pageSize:number,
    totalUserscount:number,
    currentPage:number,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUser: (users: Array<usersType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUserscount: number) => void,
}

// class UsersAPIComponent extends React.Component<initialStateType> {
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUser(response.data.items)
//             this.props.setTotalUsersCount(response.data.totalCount);
//             console.log(response)
//         })
//     }
//     onPageChange=(pageNumber:number)=>{
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUser(response.data.items)
//         })
//     }
//
//     render() {
//            return (
// <Users pageSize={this.props.pageSize} totalUserscount={this.props.totalUserscount} onPageChange={this.onPageChange} currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} users={this.props.users}/>
//         )
//     }
// }

// export default UsersAPIComponent