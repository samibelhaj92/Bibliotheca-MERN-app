import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editbook } from '../../../../redux/actions/BookActions'
import Navigation from '../../../navbar/navbar';
import './EditBook.css';

function EditBook() {
    
    const [Book_ISBN, setBook_ISBN]=useState(0)
    const [Book_Title, setBook_Title]=useState('')
    const [Book_Author, setBook_Author]=useState('')
    const [Book_PublishYear, setBook_PublishYear]=useState(0)
    const [Book_Category, setBook_Category]=useState('')
    const [Book_Genre, setBook_Genre]=useState('')
    const [Book_Publisher, setBook_Publisher]=useState('')
    const [Book_Summary, setBook_Summary]=useState('')
    const [Book_Evaluation, setBook_Evaluation]=useState(0)
    const [Book_CoupDeFoudre, setBook_CoupDeFoudre]=useState(0)
    const [Book_NumberOfCopies, setBook_NumberOfCopies]=useState(0)
    const [Book_Condition, setBook_Condition]=useState('')
    const [Book_Cover, setBook_Cover]=useState('')
    const [Book_Status, setBook_Status]=useState('')

const dispatch = useDispatch()
const navigate = useNavigate()
const book = useSelector(state=>state.BookReducer.book)
const edit = useSelector(state=>state.BookReducer.edit)
const{ id }=useParams()
useEffect(() => {
if (edit) { 
  setBook_ISBN(book.Book_ISBN); 
  setBook_Title(book.Book_Title); 
  setBook_Author(book.Book_Author); 
  setBook_PublishYear(book.Book_PublishYear);
  setBook_Category(book.Book_Category); 
  setBook_Genre(book.Book_Genre); 
  setBook_Publisher(book.Book_Publisher); 
  setBook_Summary(book.Book_Summary);
  setBook_Evaluation(book.Book_Evaluation);
  setBook_CoupDeFoudre(book.Book_CoupDeFoudre);
  setBook_NumberOfCopies(book.Book_NumberOfCopies);
  setBook_Condition(book.Book_Condition);
  setBook_Cover(book.Book_Cover);
  setBook_Status(book.Book_Status);
}
else {
  setBook_ISBN(0); 
  setBook_Title(''); 
  setBook_Author(''); 
  setBook_PublishYear(0);
  setBook_Category(''); 
  setBook_Genre(''); 
  setBook_Publisher(''); 
  setBook_Summary('');
  setBook_Evaluation(0);
  setBook_CoupDeFoudre(0);
  setBook_NumberOfCopies(0);
  setBook_Condition('');
  setBook_Cover('');
  setBook_Status('');
}
}, [book.Book_Author, book.Book_Category, book.Book_Condition, book.Book_CoupDeFoudre, book.Book_Cover, book.Book_Evaluation, book.Book_Genre, book.Book_ISBN, book.Book_NumberOfCopies, book.Book_PublishYear, book.Book_Publisher, book.Book_Status, book.Book_Summary, book.Book_Title, edit])

    return (
    <>

      <Navigation></Navigation> 
  
      <div className='EditBook_Form'>
    
    <div className='EditBook_Pitch'>
      <h1>Edit Your Book.</h1>
    </div>

  <div className='EditBook_Inputs'>

    <input 
    placeholder='Book ISBN'
    onChange={(e)=>setBook_ISBN(e.target.value)} 
    value={Book_ISBN}  
    type="number"
    />

    <input
    placeholder='Book Title' 
    onChange={(e)=>setBook_Title(e.target.value)} 
    value={Book_Title}  
    type="text"
    />

    <input
    placeholder='Book Author' 
    onChange={(e)=>setBook_Author(e.target.value)} 
    value={Book_Author}  
    type="text"
    />
  
    <input
    placeholder='Book Publish Year' 
    onChange={(e)=>setBook_PublishYear(e.target.value)} 
    value={Book_PublishYear}  
    type="number"
    />

<select 
          type="Book_Category"
          value={Book_Category} 
          onChange={(e)=>setBook_Category(e.target.value)} 
          name="Book_Category"
          >
            <option value="fiction">Fiction</option>
            <option value="non fiction">Non Fiction</option>
        </select>

    <input
    placeholder='Book Genre' 
    onChange={(e)=>setBook_Genre(e.target.value)} 
    value={Book_Genre}  
    type="text"
    />

    <input
    placeholder='Book Publisher' 
    onChange={(e)=>setBook_Publisher(e.target.value)} 
    value={Book_Publisher}  
    type="text"
    />

    <input
    placeholder='Book Summary' 
    onChange={(e)=>setBook_Summary(e.target.value)} 
    value={Book_Summary}  
    type="text"
    />

    <input
    placeholder='Book Evaluation' 
    onChange={(e)=>setBook_Evaluation(e.target.value)} 
    value={Book_Evaluation}  
    type="number"
    />

    <input
    placeholder='Book Coup de Foudre' 
    onChange={(e)=>setBook_CoupDeFoudre(e.target.value)} 
    value={Book_CoupDeFoudre}  
    type="number"
    />

    <input
    placeholder='Book Number of copies' 
    onChange={(e)=>setBook_NumberOfCopies(e.target.value)} 
    value={Book_NumberOfCopies}  
    type="number"
    />

<select 
          type="Book_Condition"
          value={Book_Condition} 
          onChange={(e)=>setBook_Condition(e.target.value)} 
          name="Book_Condition"
          >
            <option value="new">New</option>
            <option value="good">Good</option>
            <option value="used">Used</option>
            <option value="fragile">Fragile</option>
        </select>

    <input
    placeholder='Book Cover' 
    onChange={(e)=>setBook_Cover(e.target.value)} 
    value={Book_Cover}  
    type="text"
    />

<select 
          type="Book_Status"
          value={Book_Status} 
          onChange={(e)=>setBook_Status(e.target.value)} 
          name="Book_Status"
          >
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
            <option value="lost">Lost</option>
        </select>

<button 
className='EditBook_Button' 
onClick={(e)=>{ e.preventDefault() ;
  dispatch(editbook( book._id, {
    Book_ISBN, 
    Book_Title, 
    Book_Author, 
    Book_PublishYear, 
    Book_Category, 
    Book_Genre, 
    Book_Publisher, 
    Book_Summary, 
    Book_Evaluation,
    Book_CoupDeFoudre,
    Book_NumberOfCopies,
    Book_Condition,
    Book_Cover,
    Book_Status
    },
    navigate ))}}>
  Edit Book
</button>

</div>        
        </div>
        </>
    )
}

export default EditBook