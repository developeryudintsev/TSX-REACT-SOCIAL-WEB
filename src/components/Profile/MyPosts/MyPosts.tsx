import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type IMyPosts={
    propfilePosts:Array<MyPosts>
}

type MyPosts={
    id:number,
    message:string,
    likesCount:number
}

const MyPosts = (props:IMyPosts) => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {props.propfilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
              </div>
        </div>
    )
}

export default MyPosts;


