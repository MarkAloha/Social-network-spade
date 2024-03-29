import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useParams, useLocation,useNavigate } from 'react-router-dom'


class ProfileContainer extends React.Component {    
    
componentDidMount() {
   
    let userId = this.props.router.params.userId
    
    if (!userId) {
        userId = 2
    }
    // 28515 мой id
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then(response => {
            
            this.props.setUsersProfile(response.data);

        })
}


render() {
    return (
        <Profile {...this.props} profile={this.props.profile} />
    )
}
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUsersProfile })(withRouter(ProfileContainer))