import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react'




// let postsElements = postsDate.map( p => <Post message={p.message} likeCount={p.likesCount}/>)

const MyPosts = (props) => {

let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount}/>)

let newPostElement = React.createRef();

let newPostAdd = () => {  
  let text = newPostElement.current.value;
    props.onPostChange(text)
}

// let addPost = () => {    
//    props.addPost();   
// }



  return <div className={classes.Post}>
    
    <div className={classes.box}>      
        <div>Новая запись</div>
        <div><textarea onChange={newPostAdd} value = {props.newPostText} ref={newPostElement} cols="30" rows="10"  />
          <div><button onClick={props.addPost}>Отправить</button>          
        </div>
      </div>
      <div className={classes.item}>Мои записи </div>
      </div>
            
      {postsElements}
        
  </div>
}

export default MyPosts;