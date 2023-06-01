import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css'
import photo from '../../asserd/dragon.jpg'
import Preloader from "../common/Preloader/Preloader";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 2) <= 0) ? 0 : curP - 3;
    let curPL = ((curP + 4) <= 6) ? 5 : curP + 2;
    let slicedPages = pages.slice(curPF, curPL);

    return <div >
        <div className={classes.top}>
            {slicedPages.map(p => {
                return <span key={p.id} onClick={() => { props.onPageChanged(p) }} 
                className={props.currentPage === p ? classes.selectedPage : classes.page}> {p}  </span>

            })}
            {props.isFetching ? <Preloader /> : null}
        </div>

        <div className={classes.bigBox}>
            {props.users.map(u => <div key={u.id} className={classes.box} >
                <div >{u.name}</div>
                <NavLink to={'/profile/' + u.id}>
                    <img className={classes.ava} src={u.photos.small != null ? u.photos.small : photo}></img>
                </NavLink>
                <div >{u.status}</div>
                <div >{"u.location.city"}</div>
                <div >{"u.location.country"}</div>
                <div >{u.followed

                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} 

                    onClick={() => {
                        props.unfollow(u.id);
                    }}>делит</button>

                    : <button disabled={props.followingInProgress.some(id => id === u.id)} 

                    onClick={() => {
                        props.follow(u.id)
                    }}>следовать</button>
                }
                </div>
            </div>)
            }
        </div>
    </div>

}


export default Users