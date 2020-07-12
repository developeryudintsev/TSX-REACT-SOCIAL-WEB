import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type IMyPosts = {
    propfilePosts: Array<MyPosts>,
    addPost: (propsML: string) => void;
}

type MyPosts = {
    id: number,
    message: string,
    likesCount: number
}

const MyPosts = (props: IMyPosts) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        props.addPost(newPostElement.current?newPostElement.current.value : 'xxx')
        if(newPostElement.current){
            newPostElement.current.value='';
        }
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
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


