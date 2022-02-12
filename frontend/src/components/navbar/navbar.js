import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dashbord from '../Sub_Comp/Brand/picto_Dashbord.png';
import Bookshelves from '../Sub_Comp/Brand/picto_Bookshelves.png';
import Community from '../Sub_Comp/Brand/picto_Community.png';
import Threads from '../Sub_Comp/Brand/picto_Threads.png';
import Busket from '../Sub_Comp/Brand/picto_Busket.png';
import Exit from '../Sub_Comp/Brand/picto_Exit.png';
import { useDispatch } from 'react-redux';
import { getcurrent, logout } from '../../redux/actions/AuthActions';

import './navbar.css';

function Navigation() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getcurrent());
    }, [dispatch]);
    
return (

        <div className='nav_main'>

            <div className='nav_links'>

            <Link to="/dashbord">
                <img
                className='rose' 
                src={Dashbord} 
                alt='Dashbord logo'
                />
            </Link>

            <Link to="/bookshelves">
                <img
                className='Books'  
                src={Bookshelves} 
                alt='Bookshelves logo'
                />
            </Link>
            
            <Link to="/community">
                <img
                className='eye'  
                src={Community} 
                alt='Community logo'
                />
            </Link>

            <Link 
            to="/threads"
            >
               <img
                className='Feather'
                src={Threads} 
                alt='Threads logo'
                />
            </Link>

            <Link 
            to="/busket"
            >
               <img
                className='HandEye'
                src={Busket} 
                alt='Busket logo'
                />
            </Link>

               <Link 
            to="/"
            >
            <img
                className='Moon'
                onClick={()=> { 
                    dispatch(logout());
                  }}
                src={Exit} 
                alt='Exit logo'
                />
            </Link>

            </div>

        </div>

)
;
}

export default Navigation;
