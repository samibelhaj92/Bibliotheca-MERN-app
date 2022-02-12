import {GET_BOOKSHELVES, GET_BOOKSHELF, TOGGLE_FALSY, TOGGLE_TRUTHY} from "../types/BookshelfTypes"

const initialState={
bookshelves:[],
bookshelf:{},
edit:false
}

const BookshelfReducer=(state=initialState,action)=>{

    switch (action.type) {
        
        case GET_BOOKSHELVES: return {...state, bookshelves: action.payload.Bookshelves}
        
        case GET_BOOKSHELF: return {...state, bookshelf: action.payload.found}

        case TOGGLE_TRUTHY: return {...state, edit:true}

        case TOGGLE_FALSY: return {...state, edit:false}

        default:
            return state
    }
}
export default BookshelfReducer