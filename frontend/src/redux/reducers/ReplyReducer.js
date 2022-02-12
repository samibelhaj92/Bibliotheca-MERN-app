import { GET_REPLIES, GET_REPLY, TOGGLE_FALS, TOGGLE_TRUTHE } from "../types/ReplyTypes"


const initialState={
replies:[],
reply:{},
edit:false
}

const ReplyReducer=(state=initialState,action)=>{

    switch (action.type) {
        
        case GET_REPLIES: return {...state, replies: action.payload.Replies}
        
        case GET_REPLY: return {...state, reply: action.payload.found}

        case TOGGLE_TRUTHE: return {...state, edit:true}

        case TOGGLE_FALS: return {...state, edit:false}

        default:
            return state
    }
}
export default ReplyReducer