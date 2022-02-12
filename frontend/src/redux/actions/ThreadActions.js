import { GET_THREAD, GET_THREADS, TOGGLE_FALSYY, TOGGLE_TRUTHYY } from '../types/ThreadTypes';
import axios from 'axios';


export const getThreads=()=> async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    // Calling the backend
    const res= await axios.get('/thread/showThreads',config)
    // Calling the reducer
    dispatch({type:GET_THREADS, payload: res.data})
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

export const addThread=(newThread, navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    const res= await axios.post('/thread/addThread', newThread,config)
    dispatch(getThreads())
    navigate('/threads')
} catch (error) {
    console.log(error)
}
}

export const DeleteThread = (id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    const res= await axios.delete(`/thread/${id}`,config)
    dispatch(getThreads())
} catch (error) {
    console.log(error)
}
}

export const getThread=(id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.get(`/thread/${id}`,config)
        dispatch({type:GET_THREAD, payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const toggletruthyy=()=>{
    return {type:TOGGLE_TRUTHYY}
}

export const togglefalsyy=()=>{
    return {type:TOGGLE_FALSYY}
}

export const editThread=(id, updatedinfo)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.put(`/thread/${id}`, updatedinfo, config )
        dispatch(getThreads())
    } catch (error) {
        console.log(error)
    }
}