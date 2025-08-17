import {connect} from "react-redux";
import Users from "./Users";
import {folloowAc, serUsersAC, unFollowAC} from "../../Redax/usersRedux";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProp = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(folloowAc(userId));
        },
        unFollow:(userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers:(users) => {
            dispatch(serUsersAC(users));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Users);