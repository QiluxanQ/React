import s from './MuPosts.module.css'
import Post from "./Post/Post";
import React from "react"




const MyPosts = (props) => {
    let posts = props.posts.map(post => <Post messages={post.message} likesCount={post.likesCount}/> )
    let newPostElement = React.createRef()

    let add = () => {
        props.addPost()
    }

    let onPostChenge = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                My post
                <div>
                    <textarea onChange={onPostChenge} value={props.newPostText} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={add}>Add Post</button>
                </div>
                <div className={s.posts}>
                    <div>
                        new post
                    </div>
                    {posts}
                </div>

            </div>
        </div>
    )
}
export default MyPosts;