import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getcurrent} from "../../redux/actions/AuthActions";
import { getBooks } from '../../redux/actions/BookActions';
import { getBookshelves } from '../../redux/actions/BookshelfActions';
import Navigation from '../navbar/navbar';
import "./dashbord.css";

function Dashbord() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getcurrent());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBookshelves());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);    
    
    const actor = useSelector((state) => state.AuthReducer.actor);
    
    const bookshelves = useSelector(state => state.BookshelfReducer.bookshelves);

    const books = useSelector(state => state.BookReducer.books);
    return (
        <>
        <Navigation></Navigation>
        <div className='Dashbord_Main'>

            <div className='profile_info'>
                
            <div className='titleOne'>
                    <h2>Your Info.</h2>
                </div>

                <div className='infos'>
                    
                    <div className='info_label'>
                        <h3>Avatar</h3>
                        <h3>Pseudo</h3>
                        <h3>Email</h3>
                        <h3>Role</h3>
                    </div>

                    <div className='info_private'>
                        <img
                        src={actor && actor.avatar}
                        alt='profile avatar'
                        />
                        <span>{actor && actor.pseudo}</span>
                        <span>{actor && actor.email}</span>
                        <span>{actor && actor.role}</span>
                    </div>

                </div>
                
            </div>

            <div className='stats_info'>
    
            <div className='titleOne'>

                <h2>Your Stats.</h2>

            </div>
            <div className='stats'>
            <div className='stats_label'>
                        <h3>Bookshelf added</h3>
                        <h3>Books added</h3>
                        <h3>Books read</h3>
                        <h3>Books landed</h3>
                        <h3>Books borrowed</h3>
                        <h3>Comments</h3>
                        <h3>Threads</h3>
                        <h3>Evaluation</h3>
                    </div>
                    <div className='stats_private'>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
            </div>
                
            </div> 
            <div className='contribution_info'>
                
            <div className='titleOne'>
                    <h2>Your Collection.</h2>
                </div>

                <div className='info'>
                    
                    <div className='info_label'>
                        <h3>Bookshelves</h3>
                        <h3>Books</h3>
                    </div>

                    <div className='info_private'>
                        
                        {bookshelves && bookshelves.filter(el=>el.actorId==actor._id).map(el=><span>{el.Bookshelf_Label} </span>)}
                        {books && books.filter(el=>el.actorId==actor._id).map(el=><span>{el.Book_Title} </span>)}
                    </div>

                </div>
                
            </div>
        </div>
        </>
    );
}

export default Dashbord