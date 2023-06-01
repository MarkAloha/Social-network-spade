import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_RECIPES = "SET_RECIPES";

let instialState = {
  recipes: [   
  ],
};

const usersReducer = (state = instialState, action) => {
  switch (action.type) {
    case SET_RECIPES:     
    return {      
      ...state, recipes: [...state.recipes, ...action.recipes]
    };

    default:
      return state;
  }
};


export const setRecipesAC = (recipes) => ({ type: SET_RECIPES, recipes });

export default usersReducer;
