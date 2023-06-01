import React from "react";
import load from '../../../asserd/load.gif'
import classes from './Preloader.module.css'


let Preloader = (props) => {
    return <div>
        <img className={classes.load} src={load}></img>
    </div>
}

export default Preloader