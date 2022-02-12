import { CLEARERRORS, FAIL, GET_ACTORS, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/AuthTypes";
import axios from 'axios';


export const register = ({email, password, role, pseudo, avatar}, Navigate) => async (dispatch) => {
    const info = new FormData();

    info.append("email", email);
    info.append("password", password);
    info.append("role", role);
    info.append("pseudo", pseudo);
    info.append("avatar", avatar);
    try {
        //establishing communication with the backend
        const res = await axios.post("/auth/signUp", info);
        dispatch({ type: REGISTER, payload: res.data}); // Actor message token
        Navigate("/menu")
    } catch (error) {
     dispatch({ type: FAIL, payload: error.response.data})   
    }
};

export const login = (actor, Navigate) => async (dispatch) => {
    try {
        //establishing communication with the backend
        const res = await axios.post("/auth/signIn", actor); // user message token
        dispatch({ type: LOGIN, payload: res.data});
        Navigate("/menu")
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data});   
    }
};

export const getcurrent = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res = await axios.get("/auth/current", config);
        dispatch({ type: GET_CURRENT, payload: res.data});
    } catch (error) {
        console.log(error);
    }
};


export const getActors = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res = await axios.get("/auth/AllActors", config);
        dispatch({ type: GET_ACTORS, payload: res.data});
    } catch (error) {
        console.log(error);
    }
};



export const logout = () => {
    return { type: LOGOUT };
};

export const clearerrors= ()=> {
    return{ type: CLEARERRORS };
}
