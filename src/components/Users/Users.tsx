import React from 'react';
import styles from "./Users.module.css";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type propsType = {
    pageSize: number
    totalUserscount: number
    onPageChange: (pageNumber: number) => void
    currentPage: number
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    users: Array<usersType>
}

export const Users = (props: propsType) => {
    let pageCount = Math.ceil(props.totalUserscount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={styles.pagesBlock}>
                {pages.map(p =>
                    <span className={props.currentPage === p ? styles.selectedPage : styles.pages}
                          onClick={(event) => {
                              props.onPageChange(p)
                          }}>{p}</span>
                )}
            </div>
            {props.users.map(m =>
                <div key={m.id}>
            <span>
                <div>
                   <NavLink to={'/profile/' + m.id}>
                        <img src={m.photos.small != null
                            ? m.photos.small
                            : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                             className={styles.picture}/>
                    </NavLink>
                </div>
                <div>
                    {m.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f1be7d7c-7b48-4fec-a5e8-15badd889c42'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(m.id);
                                    }
                                });
                        }} className={styles.margForBtn}>UNFollow</button>
                        : <button onClick={

                            () => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'f1be7d7c-7b48-4fec-a5e8-15badd889c42'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(m.id);
                                        }
                                    });
                            }} className={styles.margForBtn}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                        <div className={styles.marg}>{m.name}</div>
                        <div className={styles.marg}>{m.status}</div>

                    </span>
                    <span>
                        <div className={styles.marg}>{"m.location.country"}</div><div
                        className={styles.marg}>{"m.location.city"}</div>
                    </span>
                </div>)}
        </div>
    )
}