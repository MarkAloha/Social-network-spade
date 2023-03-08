import dialogsReducer from "./dialogs-reducer";
import profielReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let rerenderEntireTree = () => {};
let store = {
  _state: {
    profile: {
      wall: [
      { id: 1, message: "Че как? ", likesCount: "32", age: "21" },
      { id: 2, message: "it's my first post", likesCount: "55", age: "22" },
    ],
    newPostText: "FLEX"},

    
    dialogs: {
      messages: [
        { id: 1, message: "Привет, как дела?" },
        { id: 2, message: "Что делаешь?" },
      ],
      newMessageText: "FLEX",
      names: [
        {
          id: 1,
          name: "Alex",
          url: "https://sun9-71.userapi.com/impg/jj0L1djQnfO_Y4eNaqJ0FW2Vd2wHa9v9uk0Gzw/ayg9ErxT4_I.jpg?size=756x583&quality=95&sign=eb4a7c94a90317efaba8d4f434211a70&type=album",
        },
        {
          id: 2,
          name: "Valeria",
          url: "https://sun9-86.userapi.com/impg/M0H23y88stAQM8DJXT5oBaD6UYYltCL7dbR3cQ/tY4IhpD5Q_k.jpg?size=2560x1707&quality=95&sign=5ecad4f11dce1a23b6f09a2e5bb64049&type=album",
        },
        {
          id: 3,
          name: "Natasha",
          url: "https://sun9-40.userapi.com/impg/2_2Qri50r6KMx2g3eNdLomGltYv80K6HeoPXSA/nickVUMxmJ4.jpg?size=1160x1544&quality=95&sign=02c5abeb4c4e661104533dc99adeb558&type=album",
        },
        {
          id: 4,
          name: "Max",
          url: "https://sun9-24.userapi.com/impg/lD0IadR7b161f5fC7j4LCFZFdJrp_4OSYGzoHg/6xncDIH5i4o.jpg?size=1440x1920&quality=95&sign=8582838f36d10827ef19fe53c7187eb6&type=album",
        },
        {
          id: 5,
          name: "Danil",
          url: "https://cdn-icons-png.flaticon.com/128/5054/5054396.png",
        },
        {
          id: 6,
          name: "Mark",
          url: "https://sun9-26.userapi.com/impg/yESnIEOUynXS6_cFe1Psub1cYT90BRHNgETq5w/0KcKdXsb45c.jpg?size=950x1280&quality=96&sign=e34d729cdbb11a74588c34e1eb36d82c&type=album",
        },
      ],
    },

    sidebar: [
      { url: "/Profile", item: "Profile" },
      { url: "/Dialogs", item: "Messages" },
      { url: "/News", item: "News" },
      { url: "/Music", item: "Music" },
      { url: "/Settings", item: "Settings" },
    ],
  },
  _callSubscriber() {},  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(active) {
    debugger
    this._state.profile = profielReducer(this._state.profile, active);
    this._state.dialogs = dialogsReducer (this._state.dialogs, active);
    this._state.sidebar = sidebarReducer (this._state.sidebar, active);

    this._callSubscriber(this._state);

    
}
};





// onMessageChange(text) {
//   this._state.newMessageText = text;
//   this._callSubscriber(this._state);
// },
// onPostChange(newText) {
//   this._state.newPostText = newText;
//   this._callSubscriber(this._state);
// },
// addPost() {
//   let newPost = {
//     id: 3,
//     message: this._state.newPostText,
//     likesCount: 0,
//   };
//   this._state.profile.push(newPost);
//   this._state.newPostText = "";
//   this._callSubscriber(this._state);
// },
// addMessage() {
//   let newMessage = {
//     id: 3,
//     message: this._state.newMessageText,
//   };
//   this._state.dialogs.messages.push(newMessage);
//   this._state.newMessageText = "";
//   this._callSubscriber(this._state);
// },

// if (active.type === ADD_POST){      
//   let newPost = {
//     id: 3,
//     message: this._state.newPostText,
//     likesCount: 0,
//   };
//   this._state.profile.push(newPost);
//   this._state.newPostText = "";
//   this._callSubscriber(this._state);      
// }  else if (active.type === ADD_MESSAGE){
// let newMessage = {
//   id: 3,
//   message: this._state.newMessageText,
// };
// this._state.dialogs.messages.push(newMessage);
// this._state.newMessageText = "";
// this._callSubscriber(this._state);
// }  else if (active.type === ON_POST_CHANGE){
// this._state.newPostText = active.pText;
// this._callSubscriber(this._state);
// } else if (active.type === ON_MESSAGE_CHANGE) {
// this._state.newMessageText = active.mText;
// this._callSubscriber(this._state);
// }

export default store;
