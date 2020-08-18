import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type generalType = {
    profilePosts: Array<posts>
    addPosts: () => void;
    updateNewPostText: (newText: string) => void;
    newPostText: string
}
type posts = {
    id: number,
    message: string,
    likesCount: number
}
const MyPosts = (props: generalType) => {
    debugger
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        // props.addPosts(newPostElement.current ? newPostElement.current.value : 'xxx');
        props.addPosts();
        // if (newPostElement.current) {
        //    props.updateNewPostText('')
        // }
    }
    let onPostChange = () => {
        debugger
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
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;


