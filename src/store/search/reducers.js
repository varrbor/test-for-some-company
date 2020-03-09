import { USER_SEARCH_REQUEST_SUCCESS } from "./actions.js";

const defaultState = {
    search: '',
};

export const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                search: action.payload
            }
    }

    return state;
}