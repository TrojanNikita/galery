import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';

import connect from '../hoc/connect';
import{create, login} from '../../../services/user-service';
import{userError,userRequested,userSignIn} from './../../store/user-actions'


import  './signup.css';


const SignUp=()=> {
    

  const [error, setError]=useState('');
  const [userName, setUserName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  

  const userNameChange = event => {
      setUserName(event.target.value);
  };
  const passwordChange = event => {
      setPassword(event.target.value);
  };
  const phoneChange = event => {
    setPhone(event.target.value);
  };
  const emailChange = event => {
      setEmail(event.target.value);
  };
  const confirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = event => {
      event.preventDefault();
      const newUser = {        
          email: "sjfrksdfsjgre@mail.ru",
          phone: "182869333214",
          fullName: "usfdffdsskndsggde",
          password: "msgdf7yksgrmide",
          username: "ufdssegfsadgje",
          roles: [
            "ROLE_USER"
          ]
      };
      const curUs=create(newUser);
      console.log(curUs);

      // localStorage.setItem('token',token);
      // userRequested();
      // userSignIn(curUs);
      
      //this.props.userLoginFetch(this.state)
  };
      // const{currentUser}=this.props;

      // //Если пользователь зашел, переводим его на главную(пока это продукты)
      // if (currentUser.sid)
      //     return <Redirect to="/"/>;

      const errStyle={
          border: '2px solid red'
      };


      return (
        <form className="form-signup">
                <div className="form-signup-div">
                    <input  name='userName'
                            type="text" value={userName}
                            onChange={userNameChange}
                            id="inputUserName" className="form-signup-input"
                            style={error==='userName'? errStyle:null}
                            placeholder="User Name "/>
                </div>
                <div className="form-signup-div">
                    <input  name='phone'
                            type="text" value={phone}
                            onChange={phoneChange}
                            id="inputPhone" className="form-signup-input"
                            style={error==='phone'?errStyle:null}
                            placeholder="Phone Number *"/>
                </div>

                <div className="form-signup-div">
                    <input name='email'
                            type="email" value={email}
                            onChange={emailChange}
                            id="inputEmail" className="form-signup-input"
                            style={error==='email'?errStyle:null}
                            placeholder="Email"/>
                </div>

                <div className="form-signup-div">
                    <input name='password'
                            type="password" value={password}
                            onChange={passwordChange}
                            id="inputPassword" className="form-signup-input"
                            style={error==='password'?errStyle:null}
                            placeholder="Password*"/>
                </div>
                
                <div className="form-signup-div">
                  <input name='confirmPassword'
                            type="confirmPassword" value={confirmPassword}
                            onChange={confirmPasswordChange}
                            id="inputConfirmPassword" className="form-signup-input"
                            style={error==='confirmPassword'?errStyle:null}
                            placeholder="Confirm Password *"/>
                </div>
                <button onClick={handleSubmit} className="btn btn-dark btn-sm form-signup-btn" type="button"> Sign Up
                </button>
       </form>
      )
}

// const mapDispatchToProps = (dispatch) => ({
//   userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo))
// })

// const mapStateToProps=(state) =>{
//   const currentUser = state.user.currentUser;
//   return {
//     currentUser
//   }
// };

const mapStateToProps = ({ user}) => {
  return user;
};


const mapDispatchToProps = (dispatch) => ({
   userSignIn:()=>dispatch(userSignIn()),
   userError:(np)=>dispatch(userError(np))
});


export default 
  connect(mapStateToProps,mapDispatchToProps)
  (SignUp);