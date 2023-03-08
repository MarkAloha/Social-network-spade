import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return <div className={classes.content}>
    <h5>Main content</h5>
    <div className={classes.foto}>
      <img src="https://cdnn1.lt.sputniknews.com/img/07e5/0a/1d/19657322_0:381:2730:1917_1920x0_80_0_0_ab100004201ab5c186498519f3fef44e.jpg"></img>
    </div>
    <div className={classes.item}>Аватар и описание</div>
       
  </div>
}

export default ProfileInfo;