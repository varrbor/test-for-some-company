export const USER_SEARCH_REQUEST_SUCCESS = 'USER_SEARCH_REQUEST_SUCCESS';

const API_ROOT = 'https://api.github.com';

export function updateUserList(user_name) {
    let url = '';

    if(user_name.length === 0) {
        url = `${API_ROOT}/users`;
    } 
    else {
        url = `${API_ROOT}/users${'/' + user_name}`;
    }

    return dispatch => {
        fetch(url).then(response => {
            if(!response.ok) {
              throw new Error('User not found. Please try again!')
            }

            return response.json();
        }).then(newList => {
            dispatch({
                type: USER_SEARCH_REQUEST_SUCCESS,
                payload: {
                    newList,
                }
            });
        });
    };
}
