import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/Message';

const Dialogs = (props) => {

    let messageText = (e) => {

        let body = e.target.value;
        props.onMessageChange(body)
    }

    let addMessage = () => {
        props.addMessageCall()
    }

    let newMessageElement = React.createRef();

    let messageElements = props.messages
        .map(m => <DialogMessage key={m.id} message={m.message} />)

    let dialogsElements = props.names
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} url={d.url} />);

    return (<div className={classes.dialogs}>
        <div className={classes.dialogsItems} >
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messageElements}
        </div>
        <div><textarea onChange={messageText} value={props.newMessageText} ref={newMessageElement} cols="30" rows="10"></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    </div>)
}

export default Dialogs;