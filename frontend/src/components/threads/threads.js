import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { getcurrent } from '../../redux/actions/AuthActions';
import { addreply, getReplies } from '../../redux/actions/ReplyActions';
import { addThread, getThreads } from '../../redux/actions/ThreadActions';
import Navigation from '../navbar/navbar';
import "./threads.css";

function Threads() {
    const dispatch = useDispatch();
    const [Thread_Content, setThread_Content] = useState('');
    const [newReply, setNewReply] = useState('');

    useEffect(() => {
        dispatch(getcurrent());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getThreads());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getReplies());
    }, [dispatch]);

    const threads = useSelector(state => state.ThreadReducer.threads);
    const replies = useSelector(state => state.ReplyReducer.replies);
const navigate=useNavigate()
    return (
        <>
        <Navigation></Navigation>
        <div className='mainForum'>
        <div className='threads_input'>

                <input className='thread_input'
                    onChange={(e) => setThread_Content(e.target.value)}
                    value={Thread_Content}
                    type="Thread_Content"
                    placeholder='Type your thread' 
                />
                
                <Link to="/thread/showThreads"><button
        type="submit"
        onClick={(e)=> { 
        e.preventDefault();
        dispatch(addThread({Thread_Content}, Navigate));
        }}
        >
        <i class="fas fa-hand-holding-water"></i>
        </button>
        </Link>
        </div>  
            <div className='threads'>
                
                {threads && threads.map(thread=>
                
                <div className='thread'>
                    
                    <h2>{thread.Thread_Content}</h2>
                
                {replies && replies.filter(el=>el.threadId==thread._id).map(el=><h3>{el.Reply_Content}{el.Reply_Content} </h3>)}
                
                <div className='reply'>
                <input 
                className='reply_input'
                onChange={(e) => setNewReply(e.target.value)}
                type="Reply_Content" 
                />
                
                <Link to='/AddReply'>
                    <button
                    type="submit"
                    onClick={(e)=> { 
                    e.preventDefault();
                    dispatch(addreply({Reply_Content:newReply},navigate,thread._id,));
                    }}><i class="fas fa-hand-holding-water"></i></button>
                </Link>

                </div>

        </div>
        )}
                
                </div>
<div>
            
            </div>
        
        </div>
        
        </>
    );
}

export default Threads