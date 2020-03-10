import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchIngredients } from './store/sagas/index';

import App from './App';
import burgerBuilderReducer from './store/reducers/burgerReducer';
import orderReducer from './store/reducers/order';
import checkoutReducer from './store/reducers/checkout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    checkout: checkoutReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchIngredients)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render( app, document.getElementById( 'app' ) );
