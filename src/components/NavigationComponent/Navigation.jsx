import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        {/*{ user ? null :*/}
        {/*  <li className='nav-item'>*/}
        {/*    <Link to='/login' className='nav-link'>*/}
        {/*      Login*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*}*/}
        { user.token ? null :
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                Registration
              </Link>
            </li>
        }
        <li className='nav-item'>
          <Link to='/category' className='nav-link'>
            Category
          </Link>
        </li>
        {/*  <li className='nav-item'>*/}
        {/*    <Link to='/user/profile' className='nav-link'>*/}
        {/*      Profile*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*{user.token ? (*/}
        {/*    <li className='nav-item'>*/}
        {/*      <Link to='/addPost' className='nav-link'>*/}
        {/*        Add Post*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*) : null}*/}
      </ul>
      {user.token ? (
          <button onClick={logout} className='btn btn-warning'>
            Log OUT!!!!
          </button>
      ) : null}
    </nav>
  );
};

export default Navigation;
