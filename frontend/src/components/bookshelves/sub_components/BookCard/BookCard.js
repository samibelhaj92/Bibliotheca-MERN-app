import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getcurrent } from '../../../../redux/actions/AuthActions'
import { getbook, getBooks, toggletruthy } from '../../../../redux/actions/BookActions'
import { getBookshelves } from '../../../../redux/actions/BookshelfActions'
import Navigation from '../../../navbar/navbar'
import './BookCard.css';

function BookCard({book}) {

  const dispatch = useDispatch()

  const actor = useSelector((state) => state.AuthReducer.actor);

  useEffect(() => {
    dispatch(getcurrent());
}, [dispatch]);

useEffect(() => {
  dispatch(getBookshelves());
}, [dispatch]);

  return (
    <>
      <Navigation></Navigation>
      <div className='Book'>
        <img src={`/${book.Book_Cover}`} alt='book cover'/>

        <div className='Book__Info'>
          <p className='Info__Name'>{book.Book_Title}</p>
          <p className='Info__Description'>
            Written By: {book.Book_Author}
          </p>

          <p className='Info__Status'>Status: {book.Book_Status}</p>

            <div className='Book__Info__Button'>
              <Link to={`/book/${book._id}`}>
              <button
              onClick={()=> 
              dispatch(getbook(book._id)) 
              }>Details
              </button></Link>

              <Link to={`/book/${book._id}`}>
              <button
              onClick={()=> 
              dispatch(getbook(book._id)) 
              }>Coup De Foudre
              </button></Link>

              {book.actorId==actor._id ? 
              <Link to={`/editBook/${book._id}`}>
              <button
              onClick={()=>{dispatch(getBooks(book._id)) ; 
              dispatch(toggletruthy())}}>
              Edit
              </button></Link>
              :
              null
              }
            </div>
        </div>
      </div>
        
    </>
)
}

export default BookCard