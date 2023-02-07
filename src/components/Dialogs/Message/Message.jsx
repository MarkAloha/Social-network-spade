import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'

const DialogMessage = (props) => {
    return <div className={classes.message} > {props.message} </div>
}

export default DialogMessage;