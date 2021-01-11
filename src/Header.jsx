import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Header = () =>{
  return (
    <> 
        <div className = 'Header'>
        {/* <!-- Image and text --> */}
            <nav class="navbar navbar-light bg-light ">
              <a class="navbar-brand" href="#">
                <img src="https://img.icons8.com/ios/452/google-keep.png"
                 width="40" height="40" class="d-inline-block align-top" alt=""/>
                Google Keep Clone
              </a>
            </nav>
      </div>
    </>

    );
}

export default Header;
