import React, { useState, useRef } from 'react';
import { FaFlag } from "react-icons/fa";
import CTF1 from "./CTF1";
import CTF2 from "./CTF2";
import CTF3 from "./CTF3"; 
import '../styles/CTF.css'

function Sql({ handlePageChange }) {
    const [isStarted, setIsStarted] = useState(false);
    const [time, setTime] = useState(0);
    const [flagAnswer, setFlagAnswer] = useState('');
    const [answeredFlags, setAnsweredFlags] = useState([]);
    const timerRef = useRef(null);


    const goToHome = () => {
        handlePageChange('Home');
    };
    const startChallenge = () => {
        setIsStarted(true);
        timerRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    // Array of correct flag answers
    const correctAnswers = ['4k9pl8dn5ag2', 't1m3f0urs0luti0n', 'w2zafuni0n7ghk9'];


    const handleSubmit = () => {


        const submittedAnswer = flagAnswer.trim().toLowerCase();
        if (correctAnswers.includes(submittedAnswer) && !answeredFlags.includes(submittedAnswer)) {
            setAnsweredFlags([...answeredFlags, submittedAnswer]);

            // Update the corresponding flag div's background color
            const flagIndex = correctAnswers.indexOf(submittedAnswer) + 1;
            const flagElement = document.getElementById(`flag${flagIndex}`);
            if (flagElement) {
                flagElement.style.backgroundColor = 'lightgreen';
            }

            // Check if all flags have been answered
            if (answeredFlags.length + 1 === correctAnswers.length) {
                stopTimer();
                alert(`Congratulations! You've completed all challenges in ${formatTime(time)}.`);
            }

            setFlagAnswer(''); // Clear the input after successful submission
        }


        // modal 1 functions





    };
    return (
        <section>
            <div className="container text-center">
                <div id='description'>
                    <h1 Style="padding: 7rem; color: #8679D9">SQL CTF</h1><FaFlag size={50} />

                </div>
                <div className="row layer">
                    <p Style={"text-align: left; font-size: x-large;"}>Capture the Flag (CTF) in cybersecurity is a competitive exercise where participants attempt to find hidden "flags" in purposefully vulnerable programs or websites. These challenges are designed to test and develop computer security skills, simulating real-world scenarios in a controlled environment. CTFs can be used for both educational and competitive purposes, helping participants improve their technical abilities, problem-solving skills, and cybersecurity knowledge. With this in mind, today we will simulate a solo version of CTF focused around the topic of SQL injections.  </p>
                    <br></br>
                    <p Style={"text-align: left; font-size: x-large;"}>The Rules are simple:</p>
                    <p Style={"text-align: left;  text-decoration: underline; font-size:large"}>Challenge Format:</p>
                    <ol Style={"text-align: left; padding-top:none; margin-top:none;"}>
                        <li>Multiple SQL injection challenges will be available, increasing in difficulty.</li>
                        <li>Each challenge will have a clear objective and a hidden flag to discover.</li>
                        <li>In order to discover a flag, a user will have to read, research, and follow prompts. When you feel like you have enough information, you will answer the specific question (inside the popup modal) </li>
                        <li>If the answer is correct, you will be presented with the flag and can then type this into the <span Style="font-weight: bold;">Flag Answers</span> textbox.</li>
                        <li>The game is offically over when all questions have been answered correctly and the timer stops.</li>
                    </ol>
                    <p Style={"text-align: left;  text-decoration: underline; font-size:large"}>Timing and Scoring:</p>
                    <ol Style={"text-align: left; padding-top:none; margin-top:none;"}>
                        <li>Click the "Start" button to begin the challenge set and start the timer.</li>
                        <li>The timer will continue running until all challenges are completed.</li>
                        <li>Your final score will be based on the total time taken to complete the game.</li>

                    </ol>
                    <p Style={"text-align: left;  text-decoration: underline; font-size:large"}>Hints and Resources:</p>
                    <ol Style={"text-align: left; padding-top:none; margin-top:none;"}>
                        <li>A limited number of hints may be available for each challenge.</li>
                        <li>Unlike other CTF competitions this is setup for users to use outside resources and it's encouraged in order for you to learn more about this vast topic.</li>


                    </ol>
                    <p Style={"text-align: left;"}>Remember: Have fun, learn a lot, and challenge yourself and others! Good luck!</p>


                    {/* Display once start button is pressed  */}
                    {!isStarted ? (
                        <button className="btn btn-secondary" Style="margin-bottom:2rem; margin-top:2rem;" onClick={startChallenge}>
                            Start
                        </button>
                    ) : (
                        <>
                            <div id="timerDisplay" Style="font-size: 24px; margin-bottom: 1rem; margin-top:3rem;">
                                Time: {formatTime(time)}
                            </div>
                            <label for="flagAnswers" Style={"text-align:left; font-weight: bold;"}> Flag Answers:</label>
                            <textarea
                                id="flagAnswers"

                                placeholder="Enter flag answers here"
                                Style="width: 100%; height: 100px; margin-bottom: 1rem;"
                                value={flagAnswer}
                                onChange={(e) => setFlagAnswer(e.target.value)}
                            />

                            <button
                                className="btn btn-primary"
                                Style="margin-bottom:1rem; "
                                onClick={handleSubmit}
                            >
                                Submit Flag
                            </button>

                            <div class="row" Style="padding-top:3rem;">
                                <div class="col layer2" id='flag1'>
                                    <p Style="margin-top:1rem;" title='A Caesar Cypher Generator'>Flag 1</p>
                                    <p>Difficulty: <span Style="color:green">Easy</span></p>

                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#FlagM1">
                                        Launch
                                    </button>
                                </div>

                                {/* <!-- Modal Flag1 --> */}
                                <div class="modal fade" id="FlagM1" tabindex="-1" aria-labelledby="Flag1" aria-hidden="true">
                                    <div class="modal-dialog" >
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="">Flag 1: A Basic Query</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" Style="padding:2rem; text-align:left;">
                                                <p >SQL Injection  is a code injection technique that exploits vulnerabilities in web applications that interact with databases. It occurs when an attacker injects malicious SQL statements into input fields or other data entry points of a web application. The goal is to manipulate the application's database queries to gain unauthorized access, retrieve sensitive data, or perform destructive operations like deleting or altering records</p>
                                                <p Style="font-weight:bold;" >How Does SQL Injection Work?</p>
                                                <p>Web applications often use SQL queries to interact with databases. These queries fetch, modify, or delete data based on user input. </p>
                                                <p>For more information on what an SQL injection is and a basic injection check out the following video:</p>
                                                <br></br>
                                                <iframe width="450" height="315" src="https://www.youtube.com/embed/2OPVViV-GQk?si=xduD2Qux2lVsvaI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                                <p Style=" text-align: center; padding-top:3rem;"> Challenge 1: Basic Injection login</p>
                                              
                                                <CTF1 />

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col layer2" id='flag2'>
                                    <p Style="margin-top:1rem;" title='A Caesar Cypher Generator'>Flag 2</p>
                                    <p>Difficulty: <span Style="color:orange">Moderate</span></p>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#FlagM2">
                                        Launch
                                    </button>
                                </div>

                                {/* <!-- Modal Flag2 --> */}
                                <div class="modal fade" id="FlagM2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Flag 2: Time-based blind SQL injection 5-second delay</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" >
                                                <div Style="text-align:left;">
                                                <p>A time-based SQL injection is a type of blind SQL injection attack where the attacker observes the response time of the database to infer information.</p>
                                                <ul>

                                                    <li>If the injected condition is true, the database executes the delay, causing a noticeable increase in the application's response time</li>
                                                    <li>By observing these time differences, the attacker can determine whether their injected conditions are true or false</li>
                                                    <li>This allows the attacker to extract data one piece at a time by asking a series of yes/no questions about the database contents</li>
                                                    <li>Time-based injections are particularly useful when the application doesn't display error messages or query results directly, making other types of SQL injection difficult. However, they are typically slower to execute as each piece of information requires a separate query</li>
                                                </ul>
                                                </div>
                                                < CTF2 />
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="col layer2" id='flag3'>
                                    <p Style="margin-top:1rem;" title='A Caesar Cypher Generator'>Flag 3</p>
                                    <p>Difficulty: <span Style="color:red">Hard</span></p>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#FlagM3">
                                        Launch
                                    </button>

                                    {/* <!-- Modal Flag3 --> */}
                                    <div class="modal fade" id="FlagM3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Flag 3: Union Based Attack</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>A union-based SQL injection attack is a technique that allows an attacker to retrieve additional data from the database by extending the results of the original query</p>
                                                    <ul>
                                                        <li>For the attack to succeed, the malicious query must have the same structure as the original query, including the same number of columns and compatible data types</li>
                                                        <li>This combined query returns a single result set containing data from both the original and the injected queries</li>
                                                    </ul>
                                                    <CTF3/>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        


                            </div>



                        </>
                    )}
                </div>
            </div>








            <button className="btn btn-secondary" Style="margin-bottom:5rem;" onClick={() => handlePageChange(goToHome)}>
                Back to Home
            </button>
        </section>
    );
}
export default Sql;

