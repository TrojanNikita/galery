import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {login} from '../../../services/user-service'


import './login.css';


  
  

  const LogIn=()=> {
    
    const [userName, setUserName]=useState('');

    const [password, setPassword]=useState('');
    

    const userNameChange = event => {
        setUserName(event.target.value);
    };
    const passwordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const user={
            password: "msgdf7yksgrmide",
            username: "ufdssegfsadgje"
        };
        const token=login(user);
        console.log(token);
        //this.props.userLoginFetch(this.state)
    };



        // const{currentUser}=this.props;

        // //Если пользователь зашел, переводим его на главную(пока это продукты)
        // if (currentUser.sid)
        //     return <Redirect to="/"/>;


        return (
            <form className="form-userName">
                    <input name='userName' type="text" value={userName}
                            onChange={userNameChange}
                           id="inputUserName" className="form-userName-input" placeholder="UserName"/>
                    <input name='password' type="password" value={password}
                            onChange={passwordChange}
                           id="inputPassword" className="form-userName-input" placeholder="Password" />
                    <button onClick={handleSubmit} className="btn btn-dark btn-sm form-login-btn" type="button"> Log in
                    </button>
            </form>
        )
}

// const mapDispatchToProps = dispatch => ({
//   userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
// })

// const mapStateToProps=(state) =>{
//   const currentUser = state.user.currentUser;
//   return {
//     currentUser
//   }
// };

export default LogIn;
