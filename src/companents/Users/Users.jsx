import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../img/img.png'



const Users = (props) => {
    let getUsers = () => {


        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }
    return (

        <div>
            <button onClick={getUsers}>getUsers</button>
            {
                props.users.map((user) =>
                    <div key={user.id}>
                        <div className={s.blockUsers}>

                            <div>
                                <img className={s.logoPhoto} src={user.photos.small != null ? user.photos.small :userPhoto } alt="" />
                            </div>

                            <div>
                                {user.folower ? <button onClick={() => {
                                        props.unFollow(user.id)
                                    }}>UnFollow</button> :
                                    <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>}
                            </div>
                        </div>

                        <div>{user.name}</div>
                        <div>{user.status}</div>

                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>

                    </div>
                )
            }
        </div>
    )
}

export default Users;