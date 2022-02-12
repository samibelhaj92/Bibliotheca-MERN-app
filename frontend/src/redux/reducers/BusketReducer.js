import {ADD_TO_BUSKET, REMOVE_FROM_BUSKET} from "../types/BusketTypes"

const initialState={
    busketItems:[],
    }

const BusketReducer=(state=initialState, action)=>{

    switch (action.type) {
        
        case ADD_TO_BUSKET:
        const item = action.payload;
        const existItem = state.busketItems.find((x)=> x.book === item.book);

        if(existItem) {
        return {
            ...state,
            busketItems: state.busketItems.map((x) => x.book === existItem.book ? item : x)
        }
        } else {
        return {
            ...state,
            busketItems: [...state.busketItems, item],
        };
        }

        case REMOVE_FROM_BUSKET:
        return {
            ...state,
            busketItems: state.busketItems.filter((x) => x.book !== action.payload)
        }

        default:
            return state;
    }
}
export default BusketReducer