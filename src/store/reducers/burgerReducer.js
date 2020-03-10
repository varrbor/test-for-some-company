import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    loading: false,
    err: {}
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = ( state, action ) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
};

const fetchIngredientsStart = ( state, action ) => {
    return {
        ...state,
        ...{ loading: true }
    }
};

const fetchIngredientsSuccess = ( state, action ) => {
    return {
        ...state,
        ...{ ingredients: action.ingredients, loading: false }
    }
};

const fetchIngredientsFail = ( state, action ) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
};

const removeIngredient = ( state, action ) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
};

const burgerReducer = (state = initialState, action) => {
    switch ( (action.type)) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.FETCH_INGREDIENTS_START: return fetchIngredientsStart(state, action);
        case actionTypes.FETCH_INGREDIENTS_SUCCESS: return fetchIngredientsSuccess(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAIL: return fetchIngredientsFail(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        default:
            return state;
    }
};

export default burgerReducer;