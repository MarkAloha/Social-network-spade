import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'


const Profile = (props) => {  
  return (<div className={classes.content}>
    <ProfileInfo profile={props.profile} />
    <div className={classes.box}>
    
    <MyPostsContainer  />   
    
    </div>
  </div>)

}

export default Profile;