import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
    return <header className={classes.header}>
        <img src="https://cdn-icons-png.flaticon.com/128/4498/4498899.png" />
        <div className={classes.login}>
            {props.isAuth ? 'Имя пользователя '+props.login :<NavLink to={'/login'}>login</NavLink> }
            
        </div>
    </header>
}

export default Header;