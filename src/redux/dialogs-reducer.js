const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state, active) => {
    if  (active.type === ADD_MESSAGE){
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };
     state.messages.push(newMessage);
     state.newMessageText = ''
          
    } else if (active.type === ON_MESSAGE_CHANGE) {
     state.newMessageText = active.mText;   
  }
    return state;
}

export const onMessageChangeActionCreater = (text) => ({
    type:ON_MESSAGE_CHANGE, mText: text
  })
  
  export const addMessageCreaterActionCreater = (text) => ({
    type:ADD_MESSAGE
  })

export default dialogsReducer