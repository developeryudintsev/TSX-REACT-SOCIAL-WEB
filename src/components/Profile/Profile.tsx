import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img src='https://wallpapercave.com/wp/wp2570965.jpg'/>
                </div>
                <div>ava+description</div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;

