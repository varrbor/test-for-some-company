import { GET_USER_INFORMATION_SUCCESS, GET_USER_INFORMATION_PENDING } from "./actions";

const defaultState = {
    followers: '',
    orgs: '',
    repos: '',
    subscr: '',
    pending: true,
};

export const userInformationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER_INFORMATION_SUCCESS:
            return {
                ...state,
                followers: action.payload.followers,
                orgs: action.payload.orgs,
                repos: action.payload.repos,
                subscr: action.payload.subscr,
                pending: action.payload.pending,
            }

        case GET_USER_INFORMATION_PENDING:
            return {
                ...state,
                pending: action.payload.pending,
            }
    }

    return state;
}
