import p from './Post.module.css'

const Post = (props) => {
    return (
        <div>
                <div className={p.item}>
                    <img src='https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-avatar-of-a-man-wearing-sunglasses-image_2569096.jpg'/>
                    {props.messages}
                   <h3>
                      Likes {props.likesCount}
                   </h3>
                </div>
        </div>
)
}
export default Post;