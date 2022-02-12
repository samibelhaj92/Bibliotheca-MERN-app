import AuthReducer from "./AuthReducer"
import BookReducer from "./BookReducer"
import BookshelfReducer from "./BookshelfReducer"
import ThreadReducer from "./ThreadReducer"
import ReplyReducer from "./ReplyReducer"
import BusketReducer from "./BusketReducer"
import {combineReducers} from 'redux'

const rootReducer = combineReducers({AuthReducer, BookReducer, BookshelfReducer, ThreadReducer, ReplyReducer, busket:BusketReducer})

export default rootReducer