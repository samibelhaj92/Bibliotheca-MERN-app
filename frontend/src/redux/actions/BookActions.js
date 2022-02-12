import { GET_BOOK, GET_BOOKS, TOGGLE_FALSY, TOGGLE_TRUTHY, GET_BOOKSBYBOOKSHELF} from "../types/BookTypes";
import axios from 'axios';
import { Navigate } from "react-router-dom";


export const getBooks=()=> async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    // Calling the backend
    const res= await axios.get('/book/showBooks',config)
    // Calling the reducer+
    dispatch({type:GET_BOOKS, payload: res.data})
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

export const getBooksByBookshelf=(id)=> async (dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
try {
    // Calling the backend
    const res= await axios.get(`/book/showBooks/${id}`,config)
    // Calling the reducer+
    dispatch({type:GET_BOOKSBYBOOKSHELF, payload: res.data})
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

export const addbook=({Book_ISBN, Book_Title,  Book_Author, Book_PublishYear, Book_Category, Book_Genre, Book_Publisher, Book_Summary, Book_Evaluation, Book_CoupDeFoudre, Book_NumberOfCopies, Book_Condition, Book_Cover, Book_Status}, navigate,id)=>async(dispatch)=>{
    
    const info = new FormData();

    info.append("Book_ISBN", Book_ISBN);
    info.append("Book_Title", Book_Title);
    info.append("Book_Author", Book_Author);
    info.append("Book_PublishYear", Book_PublishYear);
    info.append("Book_Category", Book_Category);
    info.append("Book_Genre", Book_Genre);
    info.append("Book_Publisher", Book_Publisher);
    info.append("Book_Summary", Book_Summary);
    info.append("Book_Evaluation", Book_Evaluation);
    info.append("Book_CoupDeFoudre", Book_CoupDeFoudre);
    info.append("Book_NumberOfCopies", Book_NumberOfCopies);
    info.append("Book_Condition", Book_Condition);
    info.append("Book_Cover", Book_Cover);
    info.append("Book_Status", Book_Status);
    
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    console.log(id)
try {
    const res= await axios.post( `/book/${id}/addBook`, info, config)
 
    dispatch(getBooks())
    navigate('/dashbord')
} catch (error) {
    console.log(error)
}
}



export const deletebook = (id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
    const res= await axios.delete(`/book/${id}`,config)
    dispatch(getBooks())
} catch (error) {
    console.log(error)
}
}

export const getbook=(id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.get(`/book/${id}`,config)
        dispatch({type:GET_BOOK, payload:res.data})
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

export const editbook=(id, updatedinfo, navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res= await axios.put(`/book/${id}`, updatedinfo, config )
        dispatch(getBooks())
        navigate('/dashbord')
    } catch (error) {
        console.log(error)
    }
}