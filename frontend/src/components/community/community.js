import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActors, getcurrent } from '../../redux/actions/AuthActions';
import Navigation from '../navbar/navbar';
import './community.css';


function Community() {

  const dispatch = useDispatch();
  
  const [role, setRole] = useState('');
  console.log(role)
  const actors = useSelector((state) => state.AuthReducer.actors);

  useEffect(() => {
      dispatch(getcurrent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActors());
}, [dispatch]);    

    return (
      
    <>
      
      <Navigation></Navigation> 
      
      <div className='Community_Main'>

        <div className='Community_Search'>

          <input 
          className='role_search'
          placeholder='Search for librarians or readers'
          onChange= {(e)=> setRole(e.target.value)}

          />

        </div>

        <div className='Community_Map'>
            
          {actors && actors.filter(el=> el.role.includes(role)).map(el=><img src={el.avatar} alt="user avatar"/>)}

        </div>

      </div> 

    </>
    )
}

export default Community