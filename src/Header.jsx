import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Header = () =>{
  return (
    <> 
        <div className = 'Header'>
        {/* <!-- Image and text --> */}
            <nav class="navbar">
              <a class="navbar" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Google_Keep_icon.svg/1024px-Google_Keep_icon.svg.png"
                 width="40" height="40"  class="d-inline-block align-top p-lg-1" alt=""/>
                Google Keep Clone 
              </a>
            </nav>
      </div>
    </>

    );
}

export default Header;
