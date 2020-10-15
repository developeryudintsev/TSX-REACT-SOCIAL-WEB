import React from 'react';
import styles from './Users.module.css'
import {FollowActionType, UnFollowActionType, usersType} from "../../redux/users-reducer";
import axios from 'axios'


export type initialStateType = {
    users: Array<usersType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUser: (users: Array<usersType>) => void
}


export const Users = (props: initialStateType) => {
 const getUsers=()=>{
     if (props.users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             props.setUser(response.data.items)
             console.log(response)
         })
     }
 }


    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(m => <div key={m.id}>
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

export default Users;