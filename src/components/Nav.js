import React from 'react';

import '../styles/Navbar.css';
import { RiSafe2Fill } from "react-icons/ri";

 function Nav({currentPage ,handlePageChange}) {
  
  
    return (
        <nav class="navbar navbar-expand-lg ">
            <a  class="navbar-brand active" href="#Home"className={currentPage === 'Home' ? 'nav-link ' : ' nav-link '} onClick={() => handlePageChange('Home')}>< RiSafe2Fill color='pink' size={40} /></a>
        <div class="container-fluid">
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <a className={currentPage === 'About' ? 'nav-link active' : ' nav-link notactive'}  href="#About" onClick={() => handlePageChange('About')}>Password Generator</a> 
                          </li>
              <li class="nav-item">
              <a className={currentPage === 'Sql' ? 'nav-link active' : ' nav-link notactive'}  href="#Sql" onClick={() => handlePageChange('Sql')}>SQL Trials</a>
                
              </li>
              <li class="nav-item">
              <a className={currentPage === 'Cipher' ? 'nav-link active' : ' nav-link notactive'}  href="#Cipher-Shift" onClick={() => handlePageChange('Cipher')}>Cipher Shift</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    );
}
export default Nav;