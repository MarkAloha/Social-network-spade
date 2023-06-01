import React from "react";
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e46f9dca-a439-4174-be8a-1a23aa35e7ca" },
});

export const loginAPI = {
  setLogin() {
    return instance
    .get(`auth/me`)
    .then((response) => response.data)
  }
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}}`)
      .then((response) => response.data);
  },
  unfollow(id) {
    return instance
    .delete(`follow/${id}`)
    .then((response) => response.data);
  },
  follow(id) {
    return instance
    .post(`follow/${id}`)
    .then((response) => response.data);
  },
};

// export const getUsers = (props) => {
//     axios
//       .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//         withCredentials: true,
//         headers: { "API-KEY": "e46f9dca-a439-4174-be8a-1a23aa35e7ca" },
//       })

//       .then((response) => {
//         if (response.data.resultCode == 0) {
//           props.unfollow(u.id);
//         }
//       })

// export const getUsers1 = () => {
//     return axios.get
//     (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}}`,{
//         withCredentials: true})
// }
