import {GET_BOOK, GET_BOOKS, TOGGLE_FALSY, TOGGLE_TRUTHY, GET_BOOKSBYBOOKSHELF} from "../types/BookTypes"

const initialState={
books:[],
book:{},
edit:false
}

const BookReducer=(state=initialState,action)=>{

    switch (action.type) {
        
        case GET_BOOKS: return {...state, books: action.payload.Books}

        case GET_BOOKSBYBOOKSHELF: return {...state, books: action.payload.books}
        
        case GET_BOOK: return {...state, book: action.payload.foundBook}

        case TOGGLE_TRUTHY: return {...state, edit:true}

        case TOGGLE_FALSY: return {...state, edit:false}

        default:
            return state
    }
}
export default BookReducer