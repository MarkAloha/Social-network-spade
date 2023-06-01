import React from 'react'
import { addPostActionCreater, onChangeActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



// const MyPostsContainer = (props) => {

// let state = props.store.getState()

//   let newPostAdd = (text) => {    
//     props.store.dispatch(onChangeActionCreater(text))
//   }

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreater())
//   }


//   return <MyPosts addPostWell={addPost} onChangeText={newPostAdd} 
// posts={state.profielReducer.profile.wall} 
//   textFlex={state.profielReducer.profile.newPostText}/>
// }

let f1 = (state) => {
  return{
    posts: state.profileReducer.wall,
    textFlex: state.profileReducer.newPostText
  }
}

let f2 = (dispatch) => {
  return {
    addPostWell: () => dispatch(addPostActionCreater()),
    onChangeText: (pText) => dispatch(onChangeActionCreater(pText))
  }
}

const MyPostsContainer = connect(f1,f2)(MyPosts)

export default MyPostsContainer;