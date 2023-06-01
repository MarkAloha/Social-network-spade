import React from "react";
import { getUsers, follow, setCurrentPage, unfollow, toggleFollowingProgress } from "../../redux/users-reducer";
import { connect } from 'react-redux';
import Users from "./Users";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.toggleIsFetching(false)

        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber,this.props.pageSize)        
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.toggleIsFetching(false)

        //     })
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
           
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress

    }
}

export default connect(mapStateToProps, { follow, unfollow,
     setCurrentPage, 
     toggleFollowingProgress, getUsers })(UsersContainer);







// let maoDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (current) => {
//             dispatch(setCurrentAC(current))
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setCountAC(count))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(isFetchingAC(isFetching))
//         }
//     }
// }