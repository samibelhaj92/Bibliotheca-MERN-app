import { ADD_TO_BUSKET, REMOVE_FROM_BUSKET} from "../types/BusketTypes";
import axios from 'axios';
import { Navigate } from "react-router-dom";

export const addToBusket = (book) => async (dispatch ) => {
   const  config={headers:{authorization:localStorage.getItem('token')}}
    const res = await axios.get(`/book/${book._id}`,config);
        dispatch({ 
            type: ADD_TO_BUSKET, 
            payload:res.data
            })
            Navigate('/busket')

            localStorage.setItem('busket', res.data.foundBook)  
        };

        // export const removeFromBusket = (id) => (dispatch) => {
        //     dispatch({ 
        //         type: REMOVE_FROM_BUSKET, 
        //         payload: id
        //         })

        //         localStorage.setItem('busket', JSON.stringify(busket.busketItems))
        // };