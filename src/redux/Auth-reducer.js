const SET_USERS_DATA = "SET-USERS-DATA";

let instialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = instialState, action) => {
  
  switch (action.type) {
    
    
    case SET_USERS_DATA:
     
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default: {
      return state;
    }
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USERS_DATA,
  data: { userId, email, login },
});

const authSet = (dispatch) => {
  
}


export default authReducer;
