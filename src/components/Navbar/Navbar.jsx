import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import FriendsBar from './FriendsBar/FriendsBar';

const setActive = (navData => navData.isActive ? classes.active : classes.item)

const Navbar = (props) => {

  let navA = props.sidebar.map(n => <NavLink to={n.url} className={setActive}>{n.item}</NavLink >)

  return (<nav className={classes.nav}>

    <div className={classes.box}>
      {navA}
    </div>
    <div>
    <div className={classes.word}>Friends</div>
    <FriendsBar names={props.names} />
    </div>
  </nav>
  )
}

export default Navbar;