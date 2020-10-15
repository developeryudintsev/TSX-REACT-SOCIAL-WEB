import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, newPostElementCreator} from "../../../redux/profile-reducer";
import { iposts} from "../../../redux/store";


type generalType = {
    updateNewPostText:(text:string)=>void
    addPost: () => void
    posts: Array<iposts>
    newPostText: string
}

const MyPosts = (props: generalType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        props.addPost();
       }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
                   }
    }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {props.posts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;


