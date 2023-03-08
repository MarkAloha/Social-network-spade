import classes from './FriendsBar.module.css'

const FriendsBar = (props) => {
    let navA = props.names.map(n => <div className={classes.item}><img src={n.url} alt='Avatar'/></div>)
    return (
        <div className={classes.friendBar}>
            {navA}
        </div>
    )
}

export default FriendsBar