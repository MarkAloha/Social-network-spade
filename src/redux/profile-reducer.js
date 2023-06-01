const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const SET_USERS_PROFILE = "SET-USERS-PROFILE" 

let instialState = {
  
    wall: [
      { id: 1, message: "Че как? ", likesCount: "32", age: "21" },
      { id: 2, message: "it's my first post", likesCount: "55", age: "22" },
    ],
    newPostText: "FLEX",
    profile: null
  
};

const profileReducer = (state = instialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      
      let newPost = state.profile.newPostText;
      return {
        ...state,
        profile: {
          ...state.profile,
          newPostText: "",
          wall: [...state.profile.wall, { id: 4, message: newPost }],
        },
      };

    case ON_POST_CHANGE:
      return {
        ...state,
        profile: { ...state.profile, newPostText: action.pText },
      };

      case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default: {
      return state;
    }
  }
};

// let stateCopy = {
//   ...state,
//   profile: { ...state.profile },
//   wall: { ...state.profile.wall },
// };
// let newPost = {
//   id: 3,
//   message: stateCopy.profile.newPostText,
//   likesCount: 0,
// };
// stateCopy.profile.wall.push(newPost);
// stateCopy.profile.newPostText = "";
// return stateCopy;

//   let stateCopy = { ...state };
//   stateCopy.profile.newPostText = action.pText;
//   return stateCopy;

export const addPostActionCreater = () => ({
  type: ADD_POST,
});

export const onChangeActionCreater = (text) => ({
  type: ON_POST_CHANGE,
  pText: text,
});

export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile
}) 

export default profileReducer;
