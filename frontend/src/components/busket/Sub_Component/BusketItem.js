import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BusketItem.css';

function BusketItem() {

    const dispatch = useDispatch();

    const actor = useSelector((state) => state.AuthReducer.actor)
    const book =useSelector(state=> state.BookReducer.book)

    return( 
        <div className='BusketItem'>
            <div className='BusketItem__Image'>
                <img src={`/${book.Book_Cover}`} alt=''/>
            </div>

            <Link to={`/book/${book._id}`} className='BusketItem__Name'>
                <p>Item 1</p>
            </Link>

            <p className='BusketItem__Fees'>$1</p>

            <select className='BusketItem__Select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>

            <button className='BusketItem__DeleteBtn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
;
}

export default BusketItem;
