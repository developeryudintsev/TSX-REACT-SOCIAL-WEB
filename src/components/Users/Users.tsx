import React from 'react';
import styles from './Users.module.css'
import {usersType} from "../../redux/users-reducer";
import axios from 'axios'

type PropsType={
    pageSize:number,
    totalUserscount:number,
    onPageChange:(pageNumber:number)=>void
    currentPage:number
    unfollow:(id: number) => void
    follow:(id: number) => void
    users: Array<usersType>
}

function Users (props:PropsType) {
        let pagesCount =Math.ceil( props.totalUserscount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={styles.pagesBlock}>
                {pages.map(p =>
                    <span  onClick={(e)=>{props.onPageChange(p)}} className={props.currentPage===p?styles.selectedPage:styles.page}>{p}</span>
                )}
                {props.users.map((m) => <div key={m.id}>
            <span>
                <div>
                   <img
                       src={m.photos.small != null ? m.photos.small : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                       className={styles.picture}/>
                </div>
                <div>
                   {m.followed
                       ? <button onClick={() => props.unfollow(m.id)} className={styles.margForBtn}>UNFollow</button>
                       : <button onClick={() => props.follow(m.id)} className={styles.margForBtn}>Follow</button>
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

export default Users