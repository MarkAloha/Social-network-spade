import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialogs from "./Dialogs";
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/Message';
import { addMessageCreaterActionCreater, onMessageChangeActionCreater } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {

//     const state = props.store.getState()

//     let messageText = (body) => {
//         props.store.dispatch(onMessageChangeActionCreater(body))
//     }

//     let addMessage = () => {
//         props.store.dispatch(addMessageCreaterActionCreater())
//     }

//     return <Dialogs onMessageChange={messageText} addMessageCall={addMessage}
//         messages={state.dialogsReducer.dialogs.messages}
//         names={state.dialogsReducer.dialogs.names}
//         newMessageText={state.dialogsReducer.dialogs.newMessageText
//         } />
// }

let f1 = (state) => {    
    return {
        messages: state.dialogsReducer.dialogs.messages,
        names: state.dialogsReducer.dialogs.names,
        newMessageText: state.dialogsReducer.dialogs.newMessageText
    }
}

let f2 = (dispatch) => {
    return {
        onMessageChange: (mText) => dispatch(onMessageChangeActionCreater(mText)),
        addMessageCall: () => dispatch(addMessageCreaterActionCreater())
    }
}

const DialogsContainer = connect(f1,f2)(Dialogs)


export default DialogsContainer;