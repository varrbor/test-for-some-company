import React from 'react';
import { connect } from 'react-redux';

import SearchComponent from '../components/searchComponent.jsx';
import { updateUserList } from '../../store/search/actions.js';

class SearchContainer extends React.Component {
    render() {
        return (
            <SearchComponent 
                updateUserList={this.props.updateUserList} 
                searchString={this.props.search.user_name}
                users={this.props.users}
            >
            </SearchComponent>
        )
    }
}

const mapStateToProps = state => {
    return {
        search: state.search,
        users: state.users,
    }
}

const mapDispatchToProps = {
    updateUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);