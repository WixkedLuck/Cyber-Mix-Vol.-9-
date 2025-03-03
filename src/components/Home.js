import React from 'react';
import '../styles/Home.css'
import {FaGithubAlt} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";


// export default function Home() {
    function Home({ handlePageChange }) {
    return (

        <div class="container text-center">


            <div class="stack" Style="--stacks: 3;">
                <span Style="--index: 0;">Cyber Pack Vol. 9</span>
                <span Style="--index: 1;">Cyber Pack Vol. 9</span>
                <span Style="--index: 2;">Cyber Pack Vol. 9</span>
            </div>
            <div  class="socialclass">
            
            <a className='Icons ' id="socials"  title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40}/></a> 
            <a className='Icons ' id="socials" title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40}/></a>
            </div>

            <div class="row" id="boxes">
                
                     <a class="col" onClick={() => handlePageChange('About')}> Password Generator</a>           
                    
                
                <div class="col">
                    2 of 2
                </div>
            </div>
            <div class="row">
                <div class="col">
                    1 of 3
                </div>
                <div class="col">
                    2 of 3
                </div>
                <div class="col">
                    3 of 3
                </div>
            </div>
<div id='footer'>
    David Hybner 2025
</div>

        </div>
    );

}
export default Home;