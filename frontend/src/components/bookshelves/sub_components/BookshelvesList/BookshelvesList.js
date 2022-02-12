import React from 'react'
import { useSelector } from 'react-redux'
import BookshelfDetails from '../../sub_components/Bookshelf/Bookshelf'
import "./BookshelvesList.css";

function BookshelvesList() {
    
    const bookshelves = useSelector(state => state.BookshelfReducer.bookshelves)
    return (
        <div className='mainShelf'>
            
        {bookshelves && bookshelves.map(bookshelf=> <BookshelfDetails bookshelf={bookshelf} key={bookshelf._id}   ></BookshelfDetails> )}

        </div>
    )
}

export default BookshelvesList