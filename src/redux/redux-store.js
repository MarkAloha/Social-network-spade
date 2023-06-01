import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import recipesReducer from './recipes-reducer'
import authReducer from "./Auth-reducer";
import thunkMiddleWare from "redux-thunk"

 

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  sidebarReducer: sidebarReducer,
  usersReducer: usersReducer,
  recipesReducer: recipesReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;



export default store;
