import p from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/Post/MyPostsConteiner";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner />
        </div>
    )
}
export default Profile