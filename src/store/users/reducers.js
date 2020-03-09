import { GET_USERS_SUCCESS } from "./actions";

const defaultState = {
    users: '',
    search: '',
};

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                search: action.payload.users,
            }
    }

    return state;
}
