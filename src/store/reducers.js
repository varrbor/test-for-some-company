import { combineReducers } from "redux";

import { usersReducer } from './users/reducers.js';
import { searchReducer } from './search/reducers.js'
import { userInformationReducer } from './users/userInformation/reducers.js';

export default combineReducers({
    users: usersReducer,
    search: searchReducer,
    userInfo: userInformationReducer,
});
