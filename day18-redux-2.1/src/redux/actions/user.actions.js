import axios from 'axios';

export const GET_USERS_REQUEST = 'GET_USER_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';


export function getUsersRequest() {
    return {
        type: GET_USERS_REQUEST,
    }
}

export function getUsersSuccess(result) {
    return {
        type: GET_USERS_SUCCESS,
        result,
    }
}

export function getUsersFailed(error) {
    return {
        type: GET_USERS_REQUEST,
        error,
    }
}


export function getUsers() {
    return function(dispatch) {
        dispatch(getUsersRequest());
        axios
        .get("https://5f51a6865e98480016123bdd.mockapi.io/users")
        .then((result) => dispatch(getUsersSuccess(result.data)))
        .catch((error) => dispatch(getUsersFailed(error)))
    };
}

