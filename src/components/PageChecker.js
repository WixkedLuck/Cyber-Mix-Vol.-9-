import React, { useState } from 'react';
import About from './PasswordGen'; 
import Home from './Home'
import Nav from './Nav';
import Sql from './SqlInject';
import Cipher from './Cipher-Shift-Page';

export default function PageChecker() {  
    const [currentPage, setCurrentPage] = useState('Home');   

    const handlePageChange = (page) => {
      setCurrentPage(page);
  };

const renderPage = () => {
  if (currentPage === 'Home') {
   
    return <Home handlePageChange={handlePageChange} />;
   
  }
    if (currentPage === 'About') {
    
      return <About handlePageChange={handlePageChange}/>;
     
    }
    if (currentPage === 'Sql') {
     
      return <Sql handlePageChange={handlePageChange}/>;
     
    }
    if (currentPage === 'Cipher') {
     
      return <Cipher handlePageChange={handlePageChange}/>;
     
    }
    return null;
  };

  

  return (
    
      <div>
       
      <Nav  currentPage={currentPage} handlePageChange={handlePageChange} /> 
     
       
      {renderPage()}
     
      </div> 
  );
}