import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import axios from "axios";
import { connect } from "react-redux";
import Header from './Header';
import authReducer from '../../redux/Auth-reducer';
import { setAuthUserData } from '../../redux/Auth-reducer';
import { loginAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {

        loginAPI.setLogin()             
        .then((response) => {      
                      debugger
                        if (response.resultCode === 0) {
                            let {id, email, login, } = response.data
                            this.props.setAuthUserData(id, email, login)
                        }               
        
                    })
                }

    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true})
    //         .then(response => {      
                      
    //             if (response.data.resultCode === 0) {
    //                 let {id, email, login, } = response.data.data
    //                 this.props.setAuthUserData(id, email, login)
    //             }               

    //         })}


    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)
