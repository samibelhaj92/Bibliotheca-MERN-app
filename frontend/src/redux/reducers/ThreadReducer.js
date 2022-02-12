import {GET_THREADS, GET_THREAD, TOGGLE_FALSYY, TOGGLE_TRUTHYY} from "../types/ThreadTypes"

const initialState={
threads:[],
thread:{},
edit:false
}

const ThreadReducer=(state=initialState,action)=>{

    switch (action.type) {
        
        case GET_THREADS: return {...state, threads: action.payload.Threads}
        
        case GET_THREAD: return {...state, thread: action.payload.found}

        case TOGGLE_TRUTHYY: return {...state, edit:true}

        case TOGGLE_FALSYY: return {...state, edit:false}

        default:
            return state
    }
}
export default ThreadReducer