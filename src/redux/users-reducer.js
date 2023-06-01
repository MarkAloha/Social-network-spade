import React from "react";
import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let instialState = {
  users: [
    // { id:1, followed: true, fullName: 'Danil', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
    // { id:2, followed: true, fullName: 'Valeria', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
    // { id:3, followed: true, fullName: 'Max', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
    // { id:4, followed: false, fullName: 'Mark', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
    // { id:5, followed: false, fullName: 'Natasha', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
    // { id:6, followed: true, fullName: 'Alex', status: 'qwe', location: {city: 'Lipetsk', country:'Russia'}},
  ],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = instialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.current,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id != action.userID),
      };
    default:
      return state;
  }
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (current) => ({
  type: SET_CURRENT_PAGE,
  current,
});
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userID,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI
      .getUsers(currentPage, pageSize)

      .then((data) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
      });
  };
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));

    usersAPI.unfollow(userID).then((response) => {
      if (response.resultCode == 0) {
        dispatch(unfollowSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));

    usersAPI.follow(userID).then((response) => {
      
      if (response.resultCode == 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};


export default usersReducer;
