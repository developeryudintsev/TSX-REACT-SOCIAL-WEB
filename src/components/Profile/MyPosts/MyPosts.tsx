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

    let newPost=React.createRef<HTMLTextAreaElement>();
let addPost=()=>{
    let text=newPost.current?.value;
    alert(text)
}

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPost}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {props.propfilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
              </div>
        </div>
    )
}

export default MyPosts;


