import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../../../../components/bookshelves/sub_components/BookCard/BookCard'

function BookList() {
    
    const books = useSelector(state => state.BookReducer.books);
    return (
        <div>
            {books.map(book=> <BookCard book={book} key={book._id}   ></BookCard> )}
        </div>
    )
}

export default BookList