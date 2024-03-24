import React, { useState } from 'react';
import './Quiz.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [proficiencyLevel, setProficiencyLevel] = useState('');
  const [beginnerCorrect, setBeginnerCorrect] = useState(0);
  const [intermediateCorrect, setIntermediateCorrect] = useState(0);
  const [advancedCorrect, setAdvancedCorrect] = useState(0);

  const questions = [
    {
      question: "What is the correct syntax to declare a variable of type integer in Java?",
      options: ["int myVar;", "myVar int;", "integer myVar;", "int = myVar;"],
      answer: "int myVar;"
    },
    {
      question: "Which of the following is used for explicit type casting in Java?",
      options: ["(cast)", "cast()", "(type)", "None of the above"],
      answer: "(cast)"
    },
    {
      question: "What will be the result of the following expression: 5 > 3 && 3 < 2?",
      options: ["true", "false", "compilation error", "runtime error"],
      answer: "false"
    },
    {
      question: "Which method is used to concatenate two strings in Java?",
      options: ["concat()", "append()", "concatenate()", "add()"],
      answer: "concat()"
    },
    {
      question: (
        <div>
          <div className="question-text"> Which statement will be printed by the following Java code snippet? </div>
          <img src="/images/question5.png" className='img' alt="question" />
        </div>
      ),
      options: ["Number is greater than 5", "Number is less than 5", "Number is less than or equal to 5", "Number is greater than or equal to 5"],
      answer: "Number is greater than 5"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of this code snippet? </div>
          <img src="/images/question6.png" className='img' alt="question" />
        </div>
      ),
      options: ["Day is: Sunday", "Day is: Monday", "Day is: Tuesday", "Day is: Invalid day"],
      answer: "Day is: Tuesday"
    },
    {
      question: (
        <div>
          <div className="question-text"> How many iterations will the following Java loop perform? </div>
          <img src="/images/question7.png" className='img' alt="question" />
        </div>
      ),
      options: ["5", "10", "4", "6"],
      answer: "5"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the following Java code snippet? </div>
          <img src="/images/question8.png" className='img' alt="question" />
        </div>
      ),
      options: ["1 2 3 4 5", "1 2 4 5", "1 2 3 5", "1 3 4 5"],
      answer: "1 2 4 5"
    },
    {
      question: "How do you access the first element of an array named 'arr' in Java?",
      options: ["arr[0]", "arr(0)", "arr{0}", "arr.at(0)"],
      answer: "arr[0]"
    },
    {
      question: (
        <div>
          <div className="question-text"> What does this method determine? </div>
          <img src="/images/question10.png" className='img' alt="question" />
        </div>
      ),
      options: ["It checks if the given number is a perfect square.", "It checks if the given number is a power of 2.", "It checks if the given number is a prime number.", "It checks if the given number is a Fibonacci number."],
      answer: "It checks if the given number is a prime number."
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the displayMessage method? </div>
          <img src="/images/question11.png" className='img' alt="question" />
        </div>
      ),
      options: ["x: 10, z: 30", "x: 10, y: 20, z: 30", "x: 10", "No output"],
      answer: "x: 10, z: 30"
    },
    {
      question: (
        <div>
          <div className="question-text"> What does the following Java method calculate recursively? </div>
          <img src="/images/question12.png" className='img' alt="question" />
        </div>
      ),
      options: ["Factorial of a number", "Sum of all numbers up to n", "Greatest common divisor of two numbers", "Fibonacci sequence up to the nth term"],
      answer: "Fibonacci sequence up to the nth term"
    },
    {
      question: "Which keyword is used in Java to throw an exception explicitly within a method?",
      options: ["try", "catch", "throw", "throws"],
      answer: "throw"
    },
    {
      question: (
        <div>
          <div className="question-text"> What does the following Java code snippet do? </div>
          <img src="/images/question14.png" className='img' alt="question" />
        </div>
      ),
      options: ["Reads a string input from the user", "Reads an integer input from the user", "Reads a double input from the user", "Prints a message without taking any input"],
      answer: "Reads an integer input from the user"
    },
    {
      question: "Which class is used for writing content to a file in Java?",
      options: ["FileReader", "BufferedWriter", "PrintWriter", "FileWriter"],
      answer: "FileWriter"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the following Java code snippet? </div>
          <img src="/images/question16.png" className='img' alt="question" />
        </div>
      ),
      options: ["Integer: 100 Double: 3.14", "Double: 100 Integer: 3.14", "Integer: 100 Integer: 3.14", "None of the above."],
      answer: "Integer: 100 Double: 3.14"
    },
    {
      question: (
        <div>
          <div className="question-text"> Which of the following method calls will throw an IllegalArgumentException? </div>
          <img src="/images/question17.png" className='img' alt="question" />
        </div>
      ),
      options: ["int result = NumberOperations.performOperation(10, 5, 'add');", "int result = NumberOperations.performOperation(15, 0, 'divide');", "int result = NumberOperations.performOperation(7, 3, 'modulo');", "int result = NumberOperations.performOperation(8, 4, 'multiply');"],
      answer: "int result = NumberOperations.performOperation(7, 3, 'modulo');"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the following Java code snippet? </div>
          <img src="/images/question18.png" className='img' alt="question" />
        </div>
      ),
      options: ["Name: John Doe, Age: 30", "John Doe, 30", "Name: John Doe, Age: 30, 30", "Compilation error"],
      answer: "Name: John Doe, Age: 30"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the contents of the numbers ArrayList after executed? </div>
          <img src="/images/question19.png" className='img' alt="question" />
        </div>
      ),
      options: ["[10, 20, 25, 40]", "[10, 25, 30, 40]", "[10, 30, 40]", "[10, 20, 30, 40]"],
      answer: "[10, 25, 30, 40]"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the main method when executed? </div>
          <img src="/images/question20.png" className='img' alt="question" />
        </div>
      ),
      options: ["[Purple, Red, Blue, Green]", "[Purple, Blue, Green, Yellow]", "[Red, Blue, Green, Purple]", "[Purple, Red, Blue, Green, Yellow]"],
      answer: "[Purple, Blue, Green, Yellow]"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the main method when executed? </div>
          <img src="/images/question21.png" className='img' alt="question" />
        </div>
      ),
      options: ["25", "30", "28", "Emily"],
      answer: "30"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the main method when executed? </div>
          <img src="/images/question22.png" className='img' alt="question" />
        </div>
      ),
      options: ["10 20 30 40", "40 30 20 10", "The output depends on the order of elements in the ArrayList.", "None of the above."],
      answer: "10 20 30 40"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output when the main method is executed? </div>
          <img src="/images/question23.png" className='img' alt="question" />
        </div>
      ),
      options: ["Thread 1: 0 Thread 1: 1 Thread 1: 2 Thread 1: 3 Thread 1: 4 Thread 2: 0 Thread 2: 1 Thread 2: 2 Thread 2: 3 Thread 2: 4 Threads execution complete.",
        "Thread 1: 0 Thread 1: 1 Thread 1: 2 Thread 1: 3 Thread 1: 4 Threads execution complete. Thread 2: 0 Thread 2: 1 Thread 2: 2 Thread 2: 3 Thread 2: 4",
        "The output cannot be determined as it depends on the thread scheduler.",
        "None of the above."],
      answer: "Thread 1: 0 Thread 1: 1 Thread 1: 2 Thread 1: 3 Thread 1: 4 Thread 2: 0 Thread 2: 1 Thread 2: 2 Thread 2: 3 Thread 2: 4 Threads execution complete."
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the main method when executed? </div>
          <img src="/images/question24.png" className='img' alt="question" />
        </div>
      ),
      options: ["Number of 5-letter words: 1", "Number of 5-letter words: 2", "Number of 5-letter words: 3", "Number of 5-letter words: 4"],
      answer: "Number of 5-letter words: 2"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the main method when executed? </div>
          <img src="/images/question25.png" className='img' alt="question" />
        </div>
      ),
      options: ["[10, 20, 30, 40, 50]", "[10, 30, 50]", "[20, 40]", "[30]"],
      answer: "[10, 30, 50]"
    }
  ];

  const handleAnswerOptionClick = (selectedAnswer) => {
    setSelectedOptions([selectedAnswer]);
  };

  const handleNextQuestionClick = () => {
    let currentScore = score;
    let beginnerCorrectAnswer = beginnerCorrect;
    let intermediateCorrectAnswer = intermediateCorrect;
    let advancedCorrectAnswer = advancedCorrect;

    // Update score based on the user's answer
    if (selectedOptions.length === 1) {
      if (selectedOptions[0] === questions[currentQuestion].answer) {
        currentScore++;
        if (currentQuestion < 9) { // First 9 questions are for beginners
          beginnerCorrectAnswer++;
        } else if (currentQuestion < 17) { // Next 8 questions are for intermediate
          intermediateCorrectAnswer++;
        } else { // Last 8 questions are for advanced
          advancedCorrectAnswer++;
        }
      }
    }

    setScore(currentScore);
    setBeginnerCorrect(beginnerCorrectAnswer);
    setIntermediateCorrect(intermediateCorrectAnswer);
    setAdvancedCorrect(advancedCorrectAnswer);

    setSelectedOptions([]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      handleGetProficiencyLevel();

      // Send quiz data to backend
      const quizData = {
        "Total_Correct_Answers": currentScore,
        "Beginner_Correct_Answers": beginnerCorrectAnswer,
        "Intermediate_Correct_Answers": intermediateCorrectAnswer,
        "Advanced_Correct_Answers": advancedCorrectAnswer,
      };

      axios.post('http://127.0.0.1:5000/send_quiz_data', quizData)
        .then((response) => {
          // Handle response from backend if needed
          const { User_Level } = response.data;
          setProficiencyLevel(User_Level);
          setShowScore(true);
        })
        .catch((error) => {
          console.error('Error sending quiz data:', error);
        });
    }
  };

  const handleGetProficiencyLevel = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/send_quiz_data', {
        'Total_Correct_Answers': score,
        'Beginner_Correct_Answers': beginnerCorrect,
        'Intermediate_Correct_Answers': intermediateCorrect,
        'Advanced_Correct_Answers': advancedCorrect,
      });
      const { User_Level } = response.data;
      setProficiencyLevel(User_Level);
      setShowScore(true);
    } catch (error) {
      console.error('Error fetching proficiency level:', error);
    }
  };

  const generateLearningPlan = () => {
    if (Array.isArray(proficiencyLevel) && proficiencyLevel.length > 0) {
      const userLevel = proficiencyLevel[0];

      if (userLevel === 'Beginner') {
        alert('Your level is beginner. Start with basic concepts and practice regularly.');
        navigate('/player', { replace: true, state: userLevel });
      } else if (userLevel === 'Intermediate') {
        alert('Your level is intermediate. Focus on more advanced topics and work on projects.');
        navigate('/player', { replace: true, state: userLevel });
      } else if (userLevel === 'Advanced') {
        alert('Your level is advanced. Dive deep into complex concepts and contribute to open-source projects.');
        navigate('/player', { replace: true, state: userLevel });
      } else if (userLevel === 'Expert') {
        alert('Congratulations! You are an expert. Keep refining your skills and mentor others.');
        navigate('/player', { replace: true, state: userLevel });
      } else {
        alert('Your proficiency level is not available. Please try again later.');
      }
    }
    else {
      alert('Unable to determine your proficiency level. Please try again later.');
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <div className="score-text">You scored {score} out of {questions.length}</div>
          {proficiencyLevel && <div className="user-level-text">Proficiency Level: {proficiencyLevel}</div>}
          <button onClick={generateLearningPlan} className='submit-button'>Generate My Learning Plan</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span className="question-count-class">Question {currentQuestion + 1}/</span>
              <span className="question-count-class">{questions.length}</span>
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={selectedOptions.includes(option) ? 'option selected' : 'option'}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button className="submit-button" onClick={handleNextQuestionClick}>
              {currentQuestion === questions.length - 1 ? 'Submit the Quiz' : 'Next Question'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
