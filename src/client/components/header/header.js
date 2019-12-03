import React from 'react';
import {Link, withRouter} from 'react-router-dom';


import './header.css';

const Header =({active, changeActive })=>{

        //const {currentUser}=this.props;changeCategory          onClick={changeCategory(name)}

        const categories = ["New", "Popular"];

        //Категории : New и Popular
        const Category = ({ name }) => (
          <div
            className={'category'}
            onClick={()=>changeActive(name)}
            style={{ borderBottom:  active === name ? '3px solid purple': 'none' ,                  
                     fontWeight:  active === name ? 'bold': 'none'
                  }}
          >
            {name}
          </div>
        );


        return (
          <div className="my-header">
            
                    <div className='main-head'>
                      {/* <img source='https://webant.ru/themes/webant/assets/icons/favicon-32x32.png' alt="picture"/> */}
                    </div>
                    <div className='cat'>
                        {categories.map((categoryName, ind) => (
                          <Category name={categoryName} key={ind}/>
                        ))}
                    </div>
                    <div className='auth'>
                      {//меняем кнопку LogIn на имя пользователя, если user залогинился
                        /*currentUser.sid?
                            <div>{currentUser.name}</div> :*/
                            <div>
                              {/* <button className='btn'>Sign In</button> 
                              <button className='btn btn-dark'>Sign Up</button>  */}
                                <Link to="/auth"
                                      className='btn btn-outline-dark btn-sm signin'>
                                      Sign In
                                </Link>
                                <Link to="/auth"
                                      className="btn btn-dark btn-sm signup">
                                      Sign Up
                                </Link>
                            </div>
                      }
                    </div>  
          </div>
        );
}

// function mapStateToProps(state) {
//   const currentUser  = state.user.currentUser;
//   return {
//     currentUser
//   }
// }


export default withRouter(Header);
