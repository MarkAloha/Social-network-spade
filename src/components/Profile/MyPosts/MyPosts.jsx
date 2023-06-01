import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react'

const MyPosts = (props) => {

let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} 
  likeCount={p.likesCount}/>)

let newPostElement = React.createRef();

let newPostAdd = () => {  
  debugger;
  let text = newPostElement.current.value;
    props.onChangeText(text)
}

let addPost = () => {
  debugger;
      props.addPostWell()
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