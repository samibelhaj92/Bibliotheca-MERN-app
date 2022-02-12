import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBookshelf } from '../../../../redux/actions/BookshelfActions'
import Navigation from '../../../navbar/navbar'
import './AddBookshelf.css'

function AddBookshelf() {
    
    const [Bookshelf_Label, setBookshelf_Label]=useState('')
    const [Bookshelf_Category, setBookshelf_Category]=useState('')
    const [Bookshelf_Rules, setBookshelf_Rules]=useState('')

const dispatch = useDispatch()
const navigate = useNavigate()


    return (
      <>
          <Navigation></Navigation> 
    <div className='AddBookshelf_Form'>

      <div className='AddBookshelf_Pitch'>
        <h1>Add Your Bookshelf.</h1>
      </div>

      <div className='AddBookshelf_Inputs'>

        <input
        placeholder='Bookshelf Label' 
        onChange={(e)=>setBookshelf_Label(e.target.value)} 
        value={Bookshelf_Label}  
        type="text"
        />

        <select 
          type="Bookshelf_Category"
          value={Bookshelf_Category} 
          onChange={(e)=>setBookshelf_Category(e.target.value)} 
          name="Bookshelf_Category"
          >
            <option value="fiction">Fiction</option>
            <option value="non fiction">Non Fiction</option>
          </select>

        <input
        placeholder='Bookshelf Rules' 
        onChange={(e)=>setBookshelf_Rules(e.target.value)} 
        value={Bookshelf_Rules}  
        type="text"
        />
  
        <button
        className='AddBookshelf_Button' 
        onClick={(e)=>{ e.preventDefault() ; 
        dispatch(addBookshelf({
        Bookshelf_Label, 
        Bookshelf_Category, 
        Bookshelf_Rules
        }, 
        navigate))}}>
        Add Bookshelf
        </button>

      </div>        
    </div>
  </>
)
}

export default AddBookshelf