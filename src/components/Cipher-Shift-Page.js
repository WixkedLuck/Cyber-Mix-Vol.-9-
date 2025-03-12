import React, { useState } from 'react';
import '../styles/Cipher.css';

export default function ShiftGen({ handlePageChange }) {
    const [input, setInput] = useState('');
    const [shift, setShift] = useState(3);
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
        setOutput(encrypt(newInput, shift));
    };

    const handleShiftChange = (e) => {
        const newShift = parseInt(e.target.value, 10);
        setShift(newShift);
        setOutput(encrypt(input, newShift));
    };

    const encrypt = (text, shift) => {
        return text
            .split('')
            .map(char => {
                if (char.match(/[a-z]/i)) {
                    const code = char.charCodeAt(0);
                    const isUpperCase = code >= 65 && code <= 90;
                    const base = isUpperCase ? 65 : 97;
                    return String.fromCharCode((code - base + shift) % 26 + base);
                }
                return char;
            })
            .join('');
    };

    const goToHome = () => {
        handlePageChange('Home');
    };

    return (
        <section className="about" id="about-me">
            <div className="container text-center">
                <div id='description'>
                <h1 Style="padding: 7rem; color: #8679D9">Cipher Shift</h1>
               
                </div>
                <div className="row layer">
                <p Style={  "text-align: left; font-size: x-large;"}>Encryption is a fundamental method in cybersecurity that transforms readable data (plaintext) into an encoded, unreadable form (ciphertext). This process provides several key benefits for cybersecurity.</p>
                    
                    <p Style={  "text-align: left; font-size: x-large;"}id='enddesc'>Furthermore, by converting sensitive information into secure, unbreakable code, encryption creates a powerful defense against various cyber threats, including unauthorized access, data theft, and manipulation. It protects data both at rest (stored on devices) and in transit (being transmitted over networks), forming a critical component of modern cybersecurity strategies. With this in mind we are going to explore one option today!</p>
                <h4 id="theCipher">Caeser Cipher</h4>
                    <h5 class="bold" Style={  "text-align: left; margin-top:2rem;"}>What is a Caesar Cipher?</h5>
                    <p>The Caesar cipher is one of the simplest and oldest encryption techniques. It's named after Julius Caesar, who reportedly used it to communicate with his generals.</p>
                    <h5 class="bold" Style={  "text-align: left; margin-top:1rem;"}>How It Works:</h5>
                  
                    <ol>
                    
                        <li Style={  "text-align: left; margin-top:5px;"}><span Style="font-weight: bold;">Shift Alphabet:</span> The core idea is to shift each letter in the plaintext by a fixed number of positions in the alphabet.</li>
                        <li Style={  "text-align: left; margin-top:5px;"}><span Style="font-weight: bold;">Fixed Key:</span>  The number of positions to shift is the "key" of the cipher. For example, with a shift of 3:</li>
                    <ul>
                        <li Style={  "text-align: left;"}>A becomes D</li>
                        <li Style={  "text-align: left;"}>B becomes E</li>
                        <li Style={  "text-align: left;"}>C becomes F</li>
                        <p Style={  "text-align: left;"}>... and so on.</p>
                    </ul>
                    <li Style={  "text-align: left; margin-top:5px;"}><span Style="font-weight: bold;">Wrap Around: </span>  When you reach the end of the alphabet, you wrap around to the beginning:</li>
                    <ul>
                        <li Style={  "text-align: left;"}>X becomes A</li>
                        <li Style={  "text-align: left;"}>Y becomes B</li>
                        <li Style={  "text-align: left;"}>Z becomes C</li>
                        <p Style={  "text-align: left;"}>... and so on.</p>
                    </ul>
                    <li Style={  "text-align: left; margin-top:5px;"}><span Style="font-weight: bold;"> Decryption: </span>  To decrypt, you simply shift back by the same number of positions.</li>
                    </ol>
                <p Style=" font-size: larger; margin-top:5px;">Now that you know how it works, why not give it a try?</p>
                
                    <div className="col layer2">
                        <label htmlFor="input">Input:</label>
                        <input
                            type="text"
                            id="input"
                            name="userInput"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Enter text to encrypt"
                        />
                    </div>
                    <div className="col layer2">
                        <label htmlFor="shift">Shift:</label>
                        <input
                            type="number"
                            id="shift"
                            value={shift}
                            onChange={handleShiftChange}
                            min="0"
                            max="25"
                        />
                    </div>
                    <div className="col layer2">
                        <label>Output:</label>
                        <output name="x" htmlFor="input">{output}</output>
                    </div>
                
                </div>
            </div>

            <button className="btn btn-secondary" Style="margin-bottom:5rem; margin-top: 5rem;" onClick={() => handlePageChange(goToHome)}>
                Back to Home
            </button>
        </section>
    );
}