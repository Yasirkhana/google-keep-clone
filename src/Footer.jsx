import React from 'react'
import './App.css'


const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <>  
    <div className = 'Footer'>
     <p class='text-center mt-5 '>CopyRight © {year} YasirKhana.</p>
    </div>
     </>
    );
}

export default Footer;
