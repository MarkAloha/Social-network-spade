import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react'
import { addPostActionCreater, onChangeActionCreater } from '../../../redux/profile-reducer';




const MyPosts = (props) => {

let postsElements = props.posts.map( p => <Post message={p.message} 
  likeCount={p.likesCount}/>)

let newPostElement = React.createRef();

let newPostAdd = () => {  
  let text = newPostElement.current.value;
    props.dispatch (onChangeActionCreater (text))
}

let addPost = () => {
      props.dispatch (addPostActionCreater ())
}


  return <div className={classes.Post}>
        
    <div className={classes.box}>      
        <div>Новая запись</div>
        <div><textarea onChange={newPostAdd} value = {props.textFlex} 
        ref={newPostElement} cols="30" rows="10"  />
          <div><button onClick={addPost}>Отправить</button>          
        </div>
      </div>
      <div className={classes.item}>Мои записи </div>
      </div>
            
      {postsElements}
        
  </div>
}

export default MyPosts;