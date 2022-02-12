import { GET_BOOKSHELF, GET_BOOKSHELVES, TOGGLE_FALSY, TOGGLE_TRUTHY } from '../types/BookshelfTypes';
import axios from 'axios';


export const getBookshelves=()=> async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    // Calling the backend
    const res= await axios.get('/bookshelf/showBookshelves',config)
    // Calling the reducer
    dispatch({type:GET_BOOKSHELVES, payload: res.data})
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

export const addBookshelf=(newBookshelf, navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    const res= await axios.post('/bookshelf/addBookshelf', newBookshelf,config)
    dispatch(getBookshelves())
    navigate('/dashbord')
} catch (error) {
    console.log(error)
}
}

export const deleteBookshelf = (id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    const res= await axios.delete(`/bookshelf/${id}`,config)
    dispatch(getBookshelves())
} catch (error) {
    console.log(error)
}
}

export const getBookshelf=(id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.get(`/bookshelf/${id}`,config)
        dispatch({type:GET_BOOKSHELF, payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const toggletruthy=()=>{
    return {type:TOGGLE_TRUTHY}
}

export const togglefalsy=()=>{
    return {type:TOGGLE_FALSY}
}

export const editBookshelf=(id, updatedinfo)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.put(`/bookshelf/${id}`, updatedinfo, config )
        dispatch(getBookshelves())
    } catch (error) {
        console.log(error)
    }
}