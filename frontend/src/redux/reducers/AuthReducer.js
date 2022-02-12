import { CLEARERRORS, FAIL, GET_ACTORS, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/AuthTypes";


const initialState = {
    actor: null,
    actors: [],
    errors: null,
    auth: false,
};

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER:
        case LOGIN:
            localStorage.setItem('token', payload.token)
            return { ...state, actor: payload.actor, auth: true, errors: null };
        
        case FAIL: return {...state, errors: payload.errors, auth: false };

        case GET_CURRENT:
            return { ...state, actor: payload, auth: true };

        case GET_ACTORS:
            return { ...state, actors: payload.actors, auth: true };

        case LOGOUT:
            localStorage.removeItem("token");
            return { ...state, auth: false, actor: null};

        case CLEARERRORS:
            return { ...state, errors: null };

        default:
            return state;
    }
};

export default AuthReducer;