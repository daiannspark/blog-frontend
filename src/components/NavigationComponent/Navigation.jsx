import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='navigationBar col-6 ml-auto mr-auto'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        { user.token ? null :
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                Registration
              </Link>
            </li>
        }
          {user.token ? (
              <li className='nav-item'>
                  <Link to='/addPost' className='nav-link'>
                      Add Post
                  </Link>
              </li>
          ) : null}
        {user.token ? (
          <li className='nav-item'>
            <Link to='/profile' className='nav-link'>
              Profile
            </Link>
          </li>
          ) : null}
      </ul>
      </div>
      {user.token ? (
          <button onClick={logout} className='btn btn-info'>
            Logout
          </button>
      ) : null}
    </nav>
  );
};

export default Navigation;
