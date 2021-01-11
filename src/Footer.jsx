import React from 'react'
import './App.css'


const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <>  
    <div className = 'Footer'>
     <p>CopyRight © {year}</p>
    </div>
     </>

    );
}

export default Footer;
