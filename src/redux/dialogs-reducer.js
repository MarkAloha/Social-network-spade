const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let instialState = {
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
};

const dialogsReducer = (state = instialState, action) => {
  
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.dialogs.newMessageText;
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          newMessageText: "",
          messages: [...state.dialogs.messages, { id: 3, message: newMessage }],
        },
      };

    // {
    //   let stateCopy = {
    //     ...state,
    //     messages: [...state.dialogs.messages],
    //   };
    //   let newMessage = {
    //     id: 3,
    //     message: stateCopy.dialogs.newMessageText,
    //   };

    //   stateCopy.dialogs.messages.push(newMessage);
    //   stateCopy.dialogs.newMessageText = "";
    //   return stateCopy;
    // }
    case ON_MESSAGE_CHANGE:
      return {
        ...state,
        dialogs: { ...state.dialogs, newMessageText: action.mText },
      };

    // {
    //   let stateCopy = { ...state,
    //   dialogs: {...state.dialogs,
    //   newMessageText: action.mText},
    // }

    // stateCopy.dialogs = {...state.dialogs,
    // newMessageText: action.mText}
    // stateCopy.dialogs.newMessageText = action.mText;
    // return stateCopy;    }

    default: {
      return state;
    }
  }
};

export const onMessageChangeActionCreater = (text) => ({
  type: ON_MESSAGE_CHANGE,
  mText: text,
});

export const addMessageCreaterActionCreater = (text) => ({
  type: ADD_MESSAGE,
});

export default dialogsReducer;
