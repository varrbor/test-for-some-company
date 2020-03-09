export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

const API_ROOT = 'https://api.github.com';

export const getUsers = (options = {}) => {
    let url = `${API_ROOT}/users`;

    return dispatch => {
        fetch(url, options).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            
            return response.json();
        }).then(users => {
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: {
                    users,
                }
            });
        });
    };
}