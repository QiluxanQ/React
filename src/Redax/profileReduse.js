const updateNewText = 'updateNewText';
const addPost = "addPost";

let intialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'My first', likesCount: 2},
        {id: 3, message: 'World', likesCount: 3},
    ],
        newPostText: 'Hello, World!'

}

 const profileReduser = (state = intialState,action) => {
        switch(action.type){
            case "addPost": {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likesCount: 0
                };
                let stateCopy = {...state};
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = ''
                return stateCopy;
            }
                case "updateNewText": {
                    let stateCopy = {...state};
                    stateCopy.newPostText = action.newText
                    return stateCopy;
                }
                    default:
                        return state;
        }
    return state;
}


export const addPostActionCreator = () => {
    return{
        type: addPost,
    }
}
export const updateNewPostTextCreater = (text) => {
    return{
        type: updateNewText,
        newText:text
    }
}


export default profileReduser;