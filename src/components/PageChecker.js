import React, { useState } from 'react';
import About from './PasswordGen'; 
import Home from './Home'
import Nav from './Nav';

export default function PageChecker() {  
    const [currentPage, setCurrentPage] = useState('Home');   


const renderPage = () => {
  if (currentPage === 'Home') {
    console.log("Home");
    return <Home handlePageChange={handlePageChange} />;
   
  }
    if (currentPage === 'About') {
      console.log("Pass-Gen Page");
      return <About />;
     
    }
   
    return ;
  };

  
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    
      <div>
       
      <Nav  currentPage={currentPage} handlePageChange={handlePageChange} />
     
       
      {renderPage()}
     
      </div> 
  );
}