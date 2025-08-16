
import {addPostActionCreator, updateNewPostTextCreater} from "../../../../Redax/profileReduse";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToPrors =  (dispatch) => {
    return {
        addPost:() => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText:(text)=>{
            let action = updateNewPostTextCreater(text)
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToPrors)(MyPosts)

export default MyPostsContainer;