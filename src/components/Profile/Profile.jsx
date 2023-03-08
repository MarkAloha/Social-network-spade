import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'


const Profile = (props) => {  
  return (<div className={classes.content}>
    <ProfileInfo />
    <div className={classes.box}>
    
    <MyPosts posts={props.posts} dispatch={props.dispatch} textFlex={props.textFlex} />   
    
    </div>
  </div>)

}

export default Profile;