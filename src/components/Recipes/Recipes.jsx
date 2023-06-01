import React from "react";
import axios from 'axios'
import classes from './Recipes.module.css'


let Recipes = (props) => {

    if (props.recipes.length === 0) {
        debugger
        axios.get('http://45.131.41.142:5443/api/v1/recipes/categories')
            .then(response => {
                props.setRecipes (response.data.categories)

            })

    }

    return (<div>
        {
            props.recipes.map(u => <div key={u.id}>
                <div>{u.name}</div>
                <img className={classes.foto} src={u.image} alt="" />
                
               
            </div>)
        }
    </div>)
}

export default Recipes;


// [
//     { id:1, followed: true, fullName: 'Danil', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:2, followed: true, fullName: 'Valeria', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:3, followed: true, fullName: 'Max', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:4, followed: false, fullName: 'Mark', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:5, followed: false, fullName: 'Natasha', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//     { id:6, followed: true, fullName: 'Alex', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
//   ]