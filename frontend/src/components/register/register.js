import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {clearerrors, register} from '../../redux/actions/AuthActions'
import Brand from '../Sub_Comp/Brand/logo_full_A.png';
import './register.css'

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [avatar, setAvatar] = useState('');

  const Navigate = useNavigate();
  
  const dispatch = useDispatch();
  
  const errors = useSelector((state) => state.AuthReducer.errors);

  useEffect(() => {
    {
    errors && errors.map((el) => alert(el.msg));
    }
    return () => {
  dispatch(clearerrors());  
  };
  }, [errors]);

  return (
    
    <div className='Register_Main'>
    
      <div className='Register_Brand'>

        <img 
        src={Brand} 
        alt='bibliotheca logo'
        />

        <h1>
          Create your account !
        </h1>

      </div>

      <div>

        <form>
    
          <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          name="email" 
          className="question" 
          required autoComplete="off" />
          
          <label 
          htmlFor="nme">
            <span>
              What's your email adress?
            </span>
          </label>
    
          <input 
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          name="password" 
          className="question" 
          required autoComplete="off" />
    
          <label 
          htmlFor="nme">
            <span>
              What's your password?
            </span>
          </label>
    
          <input 
          type="pseudo"
          value={pseudo} 
          onChange={(e) => setPseudo(e.target.value)}
          name="pseudo" 
          className="question" 
          required autoComplete="off" />
    
          <label 
          htmlFor="nme">
            <span>
              What's your pseudo?
            </span>
          </label>

          <input 
          type="file" 
          onChange={(e) => setAvatar(e.target.files[0])}
          name="avatar" 
          className="question" 
          required autoComplete="off" />
    
          <label 
          htmlFor="nme">
            <span>
              {/* Upload your avatar? */}
            </span>
          </label>
  
        </form>
        <div className='role_selection'>
            <span>
              Choose your role ?
            </span>

        <select 
          type="role"
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          name="role" 
          >
            <option value="reader">Reader</option>
            <option value="librarian">Librarian</option>
          </select>
          </div>
      </div>
    
      <div className='Register_Buttons'>
    
        <Link to="/signup">
          <button
          onClick={(e)=> { 
          e.preventDefault();
          dispatch(register({email, password, role, pseudo, avatar}, Navigate));}}
          class="button-Register">
            Sign-Up
          </button>
        </Link>

        <Link to="/signin">
          <button class="button-Login">
            <span class="text">
              Already have an account ?
            </span>
            <span>
              Sign-In
            </span>
          </button>
        </Link>

      </div>

    </div>

  )
}

export default Register
