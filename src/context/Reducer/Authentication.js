import { SET_AUTHENTICATION } from "../Type/Authentication";

export const AuthenticationReducer = (state, action) => {
    switch(action.type) {
        case SET_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
}
