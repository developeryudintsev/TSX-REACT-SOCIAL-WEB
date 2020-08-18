import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props:any) => {
    return (
        <div>
            <div className={s.content}>
                <img src='https://wallpapercave.com/wp/wp2570965.jpg'/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    )
}

export default ProfileInfo;