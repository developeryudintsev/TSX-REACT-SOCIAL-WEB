import React from 'react';
import styles from './Users.module.css'
import {usersType} from "../../redux/users-reducer";
import axios from 'axios'

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

class User extends React.Component<initialStateType> {
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
    // onPageChange=(pageNUmber)=>{
    //     this.props.setCurrentPage(pageNUmber);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNUmber}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setUser(response.data.items);
    //
    //
    //     })
    // }
    render() {
        let pagesCount =Math.ceil( this.props.totalUserscount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {pages.map(p =>
                    <span  onClick={(e)=>{this.onPageChange(p)}} className={this.props.currentPage===p?styles.selectedPage:styles.page}>{p}</span>
                )}
                {this.props.users.map(m => <div key={m.id}>
            <span>
                <div>
                   <img
                       src={m.photos.small != null ? m.photos.small : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                       className={styles.picture}/>
                </div>
                <div>
                   {m.followed
                       ? <button onClick={() => this.props.unfollow(m.id)} className={styles.margForBtn}>UNFollow</button>
                       : <button onClick={() => this.props.follow(m.id)} className={styles.margForBtn}>Follow</button>
                   }
                </div>
            </span>
                    <span>
                    <div className={styles.marg}>{m.name}</div>
                    <div className={styles.marg}>{m.status}</div>
                </span>
                    <span>
                    <div className={styles.marg}>{"m.location.country"}</div>
                    <div className={styles.marg}>{"m.location.city"}</div>
                </span>
                </div>)}
            </div>
        )
    }
}

export default User