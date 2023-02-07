import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './Message/Message';

const Dialogs = (props) => {

    let messageText = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text)
    }

    let newMessageElement = React.createRef();

    let messageElements = props.messages
        .map(m => <DialogMessage message={m.message} />)

    let dialogsElements = props.names
        .map(d => <DialogItem name={d.name} id={d.id} url={d.url} />);

    return (<div className={classes.dialogs}>
        <div className={classes.dialogsItems} >
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messageElements}
        </div>
        <div><textarea onChange={messageText} value={props.newMessageText} ref={newMessageElement} cols="30" rows="10"></textarea>
            <button onClick={props.addMessage}>Отправить</button>
        </div>

    </div>)
}

export default Dialogs;