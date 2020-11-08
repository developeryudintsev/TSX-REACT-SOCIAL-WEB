import styles from "../Users/Users.module.css";
import React from "react";
import preloader from '../../img/preloader.svg'

export let Preloader=()=>{
    return<div className={styles.flexContainer}>
        <img  className={styles.img} src={preloader}/>
    </div>
}
export default Preloader