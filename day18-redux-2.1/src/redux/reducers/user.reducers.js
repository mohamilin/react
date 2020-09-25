import {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED} from '../actions/user.actions';


const initialState = {
    data : [],
    error: null,
    isLoading: false,
}

function getUserReducers(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
            case GET_USERS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    data: action.result,
                }
            case GET_USERS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default getUserReducers;