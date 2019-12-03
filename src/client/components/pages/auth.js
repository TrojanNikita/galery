import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../header';
import PhotoList from '../photo-list';
import LogIn from '../login';
import SignUp from '../signup';

import './auth.css';


const Auth = ({mode='SignIn'}) => {

  const [active, setActive] = useState(mode);


  return(
    <div className='auth-form'>
      <div className="auth-form-header">            
                <div onClick={() => setActive('SignIn')}
                      className='head'
                      style={{ borderBottom:  active === 'SignIn' ? '3px solid purple': 'none' ,                  
                               fontWeight:  active == 'SignIn' ? 'bold': 'none' }}>
                      Sign In
                </div>
                <div onClick={() => setActive('SignUp')}
                      className='head'
                      style={{ borderBottom:  active === 'SignUp' ? '3px solid purple': 'none' ,                  
                               fontWeight:  active == 'SignUp' ? 'bold': 'none' }}>
                      Sign Up
                </div>
      </div>
      <div>
                {
                  (active === 'SignIn')?
                      <LogIn/>:<SignUp/>
                }
      </div>
    </div>
      );
};



export default Auth;
