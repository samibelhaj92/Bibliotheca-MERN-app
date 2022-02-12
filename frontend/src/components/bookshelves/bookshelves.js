import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../navbar/navbar';
import { Link } from 'react-router-dom';
import { getBookshelves, togglefalsy } from '../../redux/actions/BookshelfActions';
import BookshelvesList from './sub_components/BookshelvesList/BookshelvesList';
import { getcurrent } from '../../redux/actions/AuthActions';
import { getBooks } from '../../redux/actions/BookActions';

import './bookshelves.css';


function Bookshelf() {

  const dispatch = useDispatch()

  const [Book_Title, setBook_Title] = useState('');

  const books = useSelector(state => state.BookReducer.books);
  
  useEffect(() => {
    dispatch(getBookshelves());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getcurrent());
}, [dispatch]);

useEffect(() => {
  dispatch(getBooks());
}, [dispatch]);



    return (
      
    <>
      
    <Navigation></Navigation> 
      
    <div className='Bookshelf_Main'>

      <div className='Bookshelf_Dashbord'>

        <div className='Bookshelf_Search'>
        <input 
          placeholder='Search for books'
          onChange= {(e)=> setBook_Title(e.target.value)}
        />
        </div>
        <div className='Bookshelf_Buttons'>
      
      <a
      className='Add_Hand' 
      href='/addBookshelf' 
      as={Link} 
      to='/addBookshelf' 
      onClick={()=>dispatch(togglefalsy())}>
        <i class="fas fa-hand-holding-water"></i>
      </a>
    
    </div>

      </div>

      
      
      <div className='Bookshelves'>
        
      <div className='Search_Area'>
        {books && books.filter(el=> 
          el.Book_Title.includes(Book_Title)
          ).map(el=>
          <span>{el.Book_Title}</span>
          )}
      </div>

        <BookshelvesList></BookshelvesList>

      </div>

    </div> 

  </>
    )
}

export default Bookshelf