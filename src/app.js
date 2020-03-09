import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/reducers.js';
import Users from './pages/containers/usersContainer.jsx';
import Search from './pages/containers/searchContainer.jsx';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default class extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Search></Search>
          <div>
            <Users></Users>
          </div>
        </Provider>
      </>
    );
  }
}
