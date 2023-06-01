import React from "react";
import { followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";
import { connect } from 'react-redux';
import Recipes from "./Recipes";
import { setRecipesAC } from "../../redux/recipes-reducer";

export const RecipesContainer = (props) => {
    return (<div>
        users
    </div>)
}

let mapStateToProps = (state) => {
    return {
        recipes: state.recipesReducer.recipes
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        setRecipes: (recipes) => {
            dispatch(setRecipesAC (recipes))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);