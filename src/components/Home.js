import React from 'react';
import '../styles/Home.css'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Lottie from "lottie-react";
import PassImg from "../lottie/Password-Gen-img.png";
import SQLimg from "../lottie/SQL-Injections-img.png";
import Cypher from "../lottie/Cypher Shift.png"; 
import Trojan from "../lottie/CyberGaurd.png"; 
import groovyWalkAnimation from "../lottie/astronaut-with-space-shuttle.json";
// export default function Home() {
function Home({ handlePageChange }) {
    return (

        <div class="container text-center">


       
                   
            
          
                <div class="stack" Style="--stacks: 3;">
                  
                    <span Style="--index: 0;">Cyber Pak Vol. 9</span>
                    <span Style="--index: 1;">Cyber Pak Vol. 9</span>
                    <span Style="--index: 2;">Cyber Pak Vol. 9</span>
                    </div>
                    
                    
               
            
            <div class="socialclass">
                <p Style="color:white;">This website is a comprehensive online platform designed to equip you with essential cybersecurity knowledge and tools. Our interactive homepage features a unique "tackle box" layout, where each clickable box represents a different cybersecurity topic or tool. From encryption techniques to SQL injection, threat detection to compliance, CyberPak offers a wide range of subjects to explore!</p>
            
                <a className='Icons ' id="socials" title="GitHub" href="https://github.com/WixkedLuck/" target="_blank" rel="noreferrer"><FaGithubAlt size={40} /></a>
                <a className='Icons ' id="socials" title="LinkedIn" href="https://www.linkedin.com/in/david-a-hybner/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40} /></a>
            </div>

            <div class="row" id="boxes">
               
                <p class="col coll" onClick={() => handlePageChange('About')}> <img src={PassImg} alt='Password Generator V1' id='PassImg'></img> 
                <p Style="margin-top:1rem;" title='Password is incorrect'>A Custom Password Generator</p>
                 </p>


                <div class="col coll">
                <p class="" onClick={() => handlePageChange('Sql')}> <img src={SQLimg} alt='Password Generator V1' id='Img2'></img>
                <p Style="margin-top:1rem;" title='Definitely  a witch trial' >A witch trial? No, but a fun challange all the less</p>
                 </p>
                </div>
            </div>
            <div class="row">
                <div class="col coll">
                <p class="" onClick={() => handlePageChange('About')}> <img src={Cypher} alt='Password Generator V1' id='PassImg'></img>
                <p Style="margin-top:1rem;" title='A Caesar Cypher Generator'>D Fdhvdu Fbsihu Jhqhudwru</p>
                 </p>
                </div>
                <Lottie animationData={groovyWalkAnimation} loop={true} Style="width:20%; height:20%"/>
                <div class="col coll">
                <a href="https://wixkedluck.github.io/CyberWare/" target="_blank" rel="noopener noreferrer"><img src={Trojan} alt='Password Generator V1' id='PassImg'></img>
                 </a>
                 <p Style="margin-top:1rem;" title='My Senior Project at VSU'>Extended Learning on Topics: Cybersecurity</p>
                </div>
            </div>
            <div id='footer'>
                David Hybner 2025
            </div>

        </div>
    );

}
export default Home;