import { GET_REPLIES, GET_REPLY, TOGGLE_FALS, TOGGLE_TRUTHE } from '../types/ReplyTypes';
import axios from 'axios';

export const getReplies=()=> async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    // Calling the backend
    const res= await axios.get('/reply/showReplies',config)
    // Calling the reducer
    dispatch({type:GET_REPLIES, payload: res.data})
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

export const addreply=(newReply, navigate,id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    console.log(id)
try {
    const res= await axios.post( `/reply/${id}/addReply`, newReply,config)
 
    dispatch(getReplies())
    navigate('/threads')
} catch (error) {
    console.log(error)
}
}

export const deletereply = (id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
    const res= await axios.delete(`/reply/${id}`,config)
    dispatch(getReplies())
} catch (error) {
    console.log(error)
}
}

export const getreply=(id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.get(`/reply/${id}`,config)
        dispatch({type:GET_REPLY, payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const toggletruthe=()=>{
    return {type:TOGGLE_TRUTHE}
}

export const togglefals=()=>{
    return {type:TOGGLE_FALS}
}

export const editreply=(id, updatedinfo)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.put(`/reply/${id}`, updatedinfo, config )
        dispatch(getReplies())
    } catch (error) {
        console.log(error)
    }
}