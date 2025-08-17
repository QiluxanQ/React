const follow = 'follow';
const unFollow = "unFollow";
const setUsers = 'setUsers';

let intialState = {
    users: [],
}

const UsersReduser = (state = intialState,action) => {
    switch(action.type){
        case follow:
        return  {...state,
            users:state.users.map(u => {
                if(u.id === action.userId){
                    return {...u,folower:true};
                }
                return u
            })
        };

            case unFollow:
           return  {...state,
                users:state.users.map(u => {
                if(u.id === action.userId){
                    return {...u,folower:false};
                }
                return u
            })
            };

        case setUsers:
            return {
                ...state, users:[...action.users]}

        default:
            return state;
    }

}

export const folloowAc = (userId) => ({type: follow,userId})
export const unFollowAC = (userId) => ({type:unFollow,userId})
export const serUsersAC = (users) => ({type:setUsers,users})

export default UsersReduser;