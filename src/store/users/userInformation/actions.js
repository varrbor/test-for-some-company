export const GET_USER_INFORMATION_SUCCESS = 'GET_USER_INFORMATION_SUCCESS';
export const GET_USER_INFORMATION_PENDING = 'GET_USER_INFORMATION_PENDING';

export const getUserInformation = (options = {}, urls) => {
    let { followers, organizations, repos, subscriptions } = urls;

    return dispatch => {
        dispatch({
            type: GET_USER_INFORMATION_PENDING,
            payload: {
                pending: true,
            }
        });

        Promise.all([
            fetch(followers, options), 
            fetch(organizations, options), 
            fetch(repos, options),
            fetch(subscriptions, options),
        
        ]).then(([followers, orgs, repos, subscr]) => {
            return Promise.all([followers.json(), orgs.json(), repos.json(), subscr.json()]);
        
        }).then(data => {
            dispatch({
                type: GET_USER_INFORMATION_SUCCESS,
                payload: {
                    followers: data[0],
                    orgs: data[1],
                    repos: data[2],
                    subscr: data[3],
                    pending: false,
                }
            });
        })
    };
}
