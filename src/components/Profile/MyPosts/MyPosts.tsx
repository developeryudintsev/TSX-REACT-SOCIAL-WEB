import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let PostData = [
        {id: 1, massage: 'Hi ,how are you?',likesCount:10},
        {id: 1, massage: 'it`s my first post ',likesCount:100},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {PostData.map(m=><Post message={m.massage} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;


