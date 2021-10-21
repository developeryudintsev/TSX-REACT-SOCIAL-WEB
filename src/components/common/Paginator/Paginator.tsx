import React, {useState} from 'react';
import styles from "./Paginator.module.css";


type propsType = {
    pageSize: number
    totalItemscount: number
    onPageChange: (pageNumber: number) => void
    currentPage: number
    porshonSize?:10
    // follow: (id: number) => void
    // unfollow: (id: number) => void
    // users: Array<usersType>
    // followingInProgress: Array<any>
}

export const Paginator = ({ pageSize, totalItemscount, onPageChange, currentPage,porshonSize=10}:propsType) => {
    let pageCount = Math.ceil(totalItemscount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
  console.log(pageCount)
    let portionCount=Math.ceil(pageCount/porshonSize)
    let [portionNumber,setPortionNumber]=useState(1)
    let leftPortionPageNumber=(portionNumber-1)*porshonSize+1;
    let rightPortionPageNumber=portionNumber*porshonSize;
    // console.log(portionCount>portionNumber)
    return (
        <div>
            <div className={styles.pagesBlock}>
                {portionNumber>1&&
                <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>
                }
                {pages
                    .filter(f=>f>=leftPortionPageNumber&&f<=rightPortionPageNumber)
                    .map(p =>
                    <span className={
                        currentPage === p ? styles.selectedPage : styles.pages}
                          onClick={(event) => {
                              onPageChange(p)
                          }}>{p}</span>
                )}
                {portionCount>portionNumber&&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>
                }
            </div>
        </div>
    )
}








