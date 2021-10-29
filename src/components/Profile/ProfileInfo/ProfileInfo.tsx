import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import styles from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {propsProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

const ProfileInfo = (props:propsProfileType) => {
    if(!props.profile){
        return <Preloader/>
    }

    const mainPhotoSelected=(e:ChangeEvent<HTMLInputElement>)=>{
        //@ts-ignore
        if (e.target.files.length){
            //@ts-ignore
           props.savePhoto(e.target.files[0])
        }

    }


    return (
        <div>
            <div className={s.content}>
                <img src='https://wallpapercave.com/wp/wp2570965.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small != null
                    ? props.profile.photos.small
                    : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                     className={styles.picture}
                />
                {!props.owner&& <input type={'file'} onChange={mainPhotoSelected}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;





















