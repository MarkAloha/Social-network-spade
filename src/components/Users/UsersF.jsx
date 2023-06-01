// import React from "react";
// import classes from './Users.module.css'
// import axios from 'axios'
// import photo from '../../asserd/dragon.jpg'

// let Users = (props) => {
//  let getUsers = () => {
//     if (props.users.length === 0) {
//         debugger

//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 props.setUsers(response.data.items)

//             })

//     }
// }

//     return (<div className={classes.box}>
//         <button onClick={getUsers}>Запрос</button>        
//         {
//             props.users.map(u => <div className={classes.box} key={u.id}>
//                 <div>{u.name}</div>                
//                 {u.followed
//                     ? <button onClick={() => { props.unfollow(u.id) }}>Делит</button>
//                     : <button onClick={() => { props.follow(u.id) }}>Следовать</button>
//                 }
//                 <img className={classes.ava} src={u.photos.small != null ? u.photos.small : photo}></img>
//                 <div>{u.status}</div>
//                 <div>{"u.location.city"}</div>
//                 <div>{"u.location.country"}</div>
//             </div>)
//         }
//     </div>)
// }

// export default Users;


// [
//     { id:1, followed: true, fullName: 'Danil', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:2, followed: true, fullName: 'Valeria', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:3, followed: true, fullName: 'Max', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:4, followed: false, fullName: 'Mark', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:5, followed: false, fullName: 'Natasha', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:6, followed: true, fullName: 'Alex', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
      
//   ]