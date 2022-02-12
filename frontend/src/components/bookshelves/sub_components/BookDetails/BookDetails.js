import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../../../redux/actions/BookActions';
import { addToBusket } from '../../../../redux/actions/BusketActions';
import Navigation from '../../../navbar/navbar'
import './BookDetails.css';

function BookDetails() {

  const dispatch = useDispatch()

  const book =useSelector(state=> state.BookReducer.book)

  // useEffect(() => {
  //   dispatch(addToBusket(book));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getBooks());
}, [dispatch]);  

  return (
    <>
      <Navigation></Navigation>

      <div className='BookScreen'>
        <div className='BookScreen__Left'>
          <div className='Left__Image'>
            <img src={`/${book.Book_Cover}`} alt='book cover'/>
          </div>

          <div className='Left__Info'>
            <p className='Left__Title'>{book.Book_Title}</p>
            <p>Written By: {book.Book_Author}</p>
            <p>Description: {book.Book_Summary}</p>
          </div>
        </div>

        <div className='BookScreen__Right'>
          <div className='Right__Info'>
            <p>
              Fees: <span>$1</span> 
            </p>
            <p>
              Status: <span>{book.Book_Status}</span>
            </p>
            <p>
              Days 
              <select>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
              </select>
            </p>
            <p>
              
              <button 
              onClick={()=> 
              dispatch(addToBusket(book))
              }>
              Check Out
              </button>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default BookDetails

