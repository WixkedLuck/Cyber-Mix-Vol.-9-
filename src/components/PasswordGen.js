
import React, { useState } from 'react';

import { generatePassword } from './PasswordMrg';
import '../styles/PassGen.css';
export default function PasswordGen({ handlePageChange }) {
    const [passwordLength, setPasswordLength] = useState(20);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [optionalText, setOptionalText] = useState('');
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = generatePassword(
            passwordLength,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSymbols,
            optionalText
        );
        setGeneratedPassword(password);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);
        alert('Password copied to clipboard!');
    };
    const goToHome = () => {
        handlePageChange('Home');
      };
   
    return (
        <section className="about" id="about-me">
            <h1 Style="padding: 7rem; color: #8679D9">Password Generator</h1>



            <div className='wrapper card ' Style='margin-bottom: 5rem'>

                <div className="result-container col  ">
                    <div >

                        <span id="result" >{generatedPassword}</span>


                        <button className="btn" id="clipboard" onClick={copyToClipboard}>

                            <i className="far fa-clipboard">copy</i>
                        </button>

                    </div>
                </div>
                <form onSubmit={handleSubmit} id='Passforum'>
                    <div className="settings col" >
                        <div>
                            <h4 Style='border-bottom: 2px solid black; margin-bottom: 2rem;'>Create strong and unique passwords with ease! Our password generator allows you to customize your password by selecting from a variety of options:</h4>
                            <ul>
                            <li>Character Types: Choose from uppercase letters, lowercase letters, and symbols to enhance security.</li>

                               <li> Custom Input: Optionally add your own text to incorporate personal elements into your password.</li>

                               <li> Password Length: Specify the desired length of your password to ensure it meets your security needs.</li>

                            </ul>
                            <p>
                            Generate a secure password tailored to your preferences today!
                            </p>
                        </div>
                        <div className="setting">
                            <label>Password length</label>
                            <input
                                type="number"
                                id="length"
                                min='4'
                                max='20'
                                value={passwordLength}
                                onChange={(e) => setPasswordLength(Number(e.target.value))}
                            />
                        </div>
                        <div className="setting">
                            <label>Include uppercase letters</label>
                            <input
                                type="checkbox"
                                id="uppercase"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                            />
                        </div>
                        <div className="setting">
                            <label>Include lowercase letters</label>
                            <input
                                type="checkbox"
                                id="lowercase"
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                            />
                        </div>
                        <div className="setting">
                            <label>Include numbers</label>
                            <input
                                type="checkbox"
                                id="numbers"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                            />
                        </div>
                        <div className="setting">
                            <label>Include symbols</label>
                            <input
                                type="checkbox"
                                id="symbols"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                            />
                        </div>
                        <div className="setting">
                            <label>Optional text input</label>
                            <input
                                type="text"
                                id="optionalText"
                                placeholder="Enter optional text"
                                value={optionalText}
                                onChange={(e) => setOptionalText(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="btn btn-large" type="submit">
                        Generate Password
                    </button>
                </form>
            </div>

       
            <button className="btn btn-secondary"Style="margin-bottom:5rem;" onClick={() => handlePageChange(goToHome)}>
                Back to Home
            </button>


        </section>
    );
}
