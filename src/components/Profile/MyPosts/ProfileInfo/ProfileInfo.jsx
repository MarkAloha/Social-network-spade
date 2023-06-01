import Preloader from '../../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader/>

      return <div className={classes.content}>
        <h5>Main content</h5>
        <div className={classes.foto}>
          <img src="https://cdnn1.lt.sputniknews.com/img/07e5/0a/1d/19657322_0:381:2730:1917_1920x0_80_0_0_ab100004201ab5c186498519f3fef44e.jpg"></img>
        </div>
        <div className={classes.item}>
          <img src={props.profile.photos.large}></img>
          <div>Описание
            <div>Обо мне: {props.profile.aboutMe}</div>
            <div>Контакты:
              <ul >
                <li>{props.profile.contacts.vk}</li>
              <li>{props.profile.contacts.twitter}</li>
              <li>{props.profile.contacts.instagram}</li>
              <li>{props.profile.contacts.youtube}</li>
              <li>{props.profile.contacts.github}</li>
              </ul>
            </div>
          </div>
          </div>

      </div>
}

      export default ProfileInfo;