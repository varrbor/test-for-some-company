import React from 'react';
import { connect } from 'react-redux';

import { getUserInformation } from '../../../store/users/userInformation/actions.js';
import UserInformationComponent from '../../components/userInformation/useInformationComponent.jsx';

import Preloader from '../../components/preloaders/userInformationPreloader.jsx';

class UserMoreInformation extends React.Component {
    componentDidMount() {
        this.props.getUserInformation({}, {
            followers: this.props.user.followers_url, 
            organizations: this.props.user.organizations_url,
            repos: this.props.user.repos_url,
            subscriptions: this.props.user.subscriptions_url,
        })
    }

    render() {
        if(!this.props.userInfo.pending) {
            return <UserInformationComponent 
                userInfo={this.props.userInfo}
                user={this.props.user}
            ></UserInformationComponent>
        }
        else {
            return <Preloader></Preloader>
        }
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
    }
}

const mapDispatchToProps = {
    getUserInformation,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMoreInformation);
