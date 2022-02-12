import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/AuthActions'
import {clearerrors} from '../../redux/actions/AuthActions'
import Brand from '../Sub_Comp/Brand/logo_full_A.png';
import './login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
<div className='Login_Main'>
    
    <div className='Login_Brand'>

    <img 
    src={Brand} 
    alt='bibliotheca logo'
    />

    </div>

    <div>
  <h1>Welcome back !</h1>
  <form>
    <input 
    type="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    name="email" 
    className="question" 
    id="nme" 
    required autoComplete="off" />
    <label 
    htmlFor="nme">
      <span>What's your email adress?</span>
      </label>
    
    <input 
    type="password"
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
    name="password" 
    className="question" 
    id="nme" 
    required autoComplete="off" />
    <label 
    htmlFor="nme">
      <span>What's your password?</span>
      </label>
  
  </form>
</div>
    
    <div className='Login_Buttons'>
    
    <Link to="/signin">
    <button
     type="submit"
     onClick={(e)=> { 
     e.preventDefault();
     dispatch(login({email, password}, Navigate));
     }}
    class="button-52">Sign-In</button>
    </Link>

    <Link to="/signup">
    <button 
    class="button-57">
      <span 
      class="text">
        Forgot your credentials ?
        </span>
        <span>Sign-Up</span>
        </button>
        </Link>

    </div>


</div>

    )
}

export default Login
