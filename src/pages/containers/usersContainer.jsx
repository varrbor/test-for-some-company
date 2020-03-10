import React from 'react';
import { connect } from 'react-redux';

import UserComponent from '../components/usersComponent.jsx';
import { getUsers } from '../../store/users/actions.js';

class UsersContainer extends React.Component {
    state = {
        users: this.props.search
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        let list = new Array(this.props.search.search.newList)
        list = Array.isArray(list[0]) ? list[0] : list;

        if(this.props.users.users) {
            return <UserComponent 
                users={this.props.search.search ? list : this.props.users.users}> 
            </UserComponent>;
        }

        else {
            return <div>API rate limit exceeded</div>
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        search: state.search,
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);