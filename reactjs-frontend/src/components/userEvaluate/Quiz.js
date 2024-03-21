import React, { useState } from 'react';
import './Quiz.css';
import axios from 'axios';

export default function Quiz() {
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
      answer: "int myVar"
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
          <img src="/images/question5.png" alt="question"/>
        </div>
      ),
      options: ["Number is greater than 5", "Number is less than 5", "Number is less than or equal to 5", "Number is greater than or equal to 5"],
      answer: "Number is greater than 5"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of this code snippet? </div>
          <img src="/images/question6.png" alt="question" />
        </div>
      ),
      options: ["Day is: Sunday", "Day is: Monday", "Day is: Tuesday", "Day is: Invalid day"],
      answer: "Day is: Tuesday"
    },
    {
      question: (
        <div>
          <div className="question-text"> How many iterations will the following Java loop perform? </div>
          <img src="/images/question7.png" alt="question" />
        </div>
      ),
      options: ["5", "10", "4", "6"],
      answer: "5"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the following Java code snippet? </div>
          <img src="/images/question8.png" alt="question" />
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
          <img src="/images/question10.png" alt="question" />
        </div>
      ),
      options: ["It checks if the given number is a perfect square.", "It checks if the given number is a power of 2.", "It checks if the given number is a prime number.", "It checks if the given number is a Fibonacci number."],
      answer: "It checks if the given number is a prime number."
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the displayMessage method? </div>
          <img src="/images/question11.png" alt="question" />
        </div>
      ),
      options: ["x: 10, z: 30", "x: 10, y: 20, z: 30", "x: 10", "No output"],
      answer: "x: 10, z: 30"
    },
    {
      question: (
        <div>
          <div className="question-text"> What does the following Java method calculate recursively? </div>
          <img src="/images/question12.png" alt="question" />
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
          <img src="/images/question14.png" alt="question" />
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
          <div className="question-text"> Which of the following method calls will compile successfully? </div>
          <img src="/images/question16.png" alt="question" />
        </div>
      ),
      options: ["int result = calculateSum(5, 10);", "double result = calculateSum(3.5, 7.8);", "float result = calculateSum(4.2, 8.6);", "calculateSum(5.0, 10.0);"],
      answer: ["int result = calculateSum(5, 10);", "double result = calculateSum(3.5, 7.8);"]
    },
    {
      question: (
        <div>
          <div className="question-text"> Which of the following method calls will throw an IllegalArgumentException? </div>
          <img src="/images/question17.png" alt="question" />
        </div>
      ),
      options: ["int result = NumberOperations.performOperation(10, 5, 'add');", "int result = NumberOperations.performOperation(15, 0, 'divide');", "int result = NumberOperations.performOperation(7, 3, 'modulo');", "int result = NumberOperations.performOperation(8, 4, 'multiply');"],
      answer: ["int result = NumberOperations.performOperation(7, 3, 'modulo');"]
    }
  ];

  const handleAnswerOptionClick = (selectedAnswer) => {
    // Allow multiple answers for relavant Questions
    if (currentQuestion === 15) {
      let newSelectedOptions;
      if (selectedOptions.includes(selectedAnswer)) {
        newSelectedOptions = selectedOptions.filter(option => option !== selectedAnswer);
      } else {
        newSelectedOptions = [...selectedOptions, selectedAnswer];
      }
      setSelectedOptions(newSelectedOptions);
    } else {
      // For other questions, allow only one answer
      setSelectedOptions([selectedAnswer]);
    }
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
  
  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          {proficiencyLevel && <div>Proficiency Level: {proficiencyLevel}</div>}
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
          <button className="next-question-button" onClick={handleNextQuestionClick}>
            {currentQuestion === questions.length - 1 ? 'Submit the Quiz' : 'Next Question'}
          </button>
        </>
      )}
    </div>
  );
}
