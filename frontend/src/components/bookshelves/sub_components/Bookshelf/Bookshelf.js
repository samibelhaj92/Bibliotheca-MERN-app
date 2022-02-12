import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getcurrent } from '../../../../redux/actions/AuthActions';
import { getBooksByBookshelf } from '../../../../redux/actions/BookActions';
import { getBookshelves } from '../../../../redux/actions/BookshelfActions';
import "./Bookshelf.css";

function BookshelfDetails({bookshelf}) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getcurrent());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBookshelves());
    }, [dispatch]);



    const actor = useSelector((state) => state.AuthReducer.actor);
    
    return (
    <div className='Bookshelf_Area'>

        <div className='Bookshelf_Details'>
    
            <h2>
                {bookshelf.Bookshelf_Label}
            </h2>
                    
            <h3>
                {bookshelf.Bookshelf_Category}
            </h3>
            
            <div>
            {bookshelf.actorId==actor._id ? 
            <Link 
            to= {`/addBook/${bookshelf._id}`}
            > <button ><i class="fas fa-hand-holding-water"></i></button></Link>
            :
            null }

            <Link 
            to= {`/showBooks/${bookshelf._id}`}
            > <button 
            onClick={()=> 
            dispatch(getBooksByBookshelf(bookshelf._id))}
            ><i class="fas fa-hand-holding"></i></button></Link>        
    </div>
        </div>
    </div>
        
    )
}

export default BookshelfDetails