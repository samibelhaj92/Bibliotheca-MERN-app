import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editBookshelf } from '../../../../redux/actions/BookshelfActions'
import Navigation from '../../../navbar/navbar'
import './EditBookshelf.css'

function EditBookshelf() {
    
    const [Bookshelf_Label, setBookshelf_Label]=useState('')
    const [Bookshelf_Category, setBookshelf_Category]=useState('')
    const [Bookshelf_Rules, setBookshelf_Rules]=useState('')

const dispatch = useDispatch()
const navigate = useNavigate()
const bookshelf = useSelector(state=>state.BookshelfReducer.bookshelf)
const edit = useSelector(state=>state.BookshelfReducer.edit)

useEffect(() => {
if (edit) { 
  setBookshelf_Label(bookshelf.Bookshelf_Label); 
  setBookshelf_Category(bookshelf.Bookshelf_Category); 
  setBookshelf_Rules(bookshelf.Bookshelf_Rules);
}
else {
    setBookshelf_Label(''); 
    setBookshelf_Category(''); 
    setBookshelf_Rules('');
}
}, [bookshelf.Bookshelf_Category, bookshelf.Bookshelf_Label, bookshelf.Bookshelf_Rules, edit])

    return (
      <>
          <Navigation></Navigation> 
    <div className='EditBookshelf_Form'>

      <div className='EditBookshelf_Pitch'>
        <h1>Edit Your Bookshelf.</h1>
      </div>

      <div className='EditBookshelf_Inputs'>

          <input
          placeholder='Bookshelf Label'  
          onChange={(e)=>setBookshelf_Label(e.target.value)} 
          value={Bookshelf_Label}  
          type="text"
          />
      
          <input
          placeholder='Bookshelf Category' 
          onChange={(e)=>setBookshelf_Category(e.target.value)} 
          value={Bookshelf_Category}  
          type="text"
          />

          <input
          placeholder='Bookshelf Rules' 
          onChange={(e)=>setBookshelf_Rules(e.target.value)} 
          value={Bookshelf_Rules}  
          type="text"
          />

<button
className='EditBookshelf_Button'  
onClick={(e)=>{ e.preventDefault() ;
  dispatch(editBookshelf( bookshelf._id, {
    Bookshelf_Label, 
    Bookshelf_Category, 
    Bookshelf_Rules
    },
    navigate ))}}>
  Edit Book
</button>

</div>        
        </div>
        </>
    )
}

export default EditBookshelf