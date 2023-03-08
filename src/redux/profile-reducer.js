const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

const profielReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.wall.push(newPost);
      state.newPostText = "";
      return state;
    case ON_POST_CHANGE:
      state.newPostText = action.pText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({
    type: ADD_POST
  })
  
  export const onChangeActionCreater = (text) => ({
    type:ON_POST_CHANGE, pText: text
  })

export default profielReducer;
