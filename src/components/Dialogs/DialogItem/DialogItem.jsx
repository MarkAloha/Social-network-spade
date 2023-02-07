import { NavLink, useAsyncValue } from 'react-router-dom';
import classes from './../Dialogs.module.css'

const setActive = (navData => navData.isActive ? classes.active : classes.item)

const DialogItem = (props) => {

    return <div className={classes.item} >
        <NavLink to={"/Dialogs/" + props.id} className={setActive}>
            <div className={classes.ava}><img src={props.url} alt='Avatar' /></div>
            <div className={classes.name}> {props.name}</div></NavLink></div>
}


export default DialogItem;