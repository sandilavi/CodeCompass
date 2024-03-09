import React, { useState } from 'react';
import './Quiz.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const questions = [
    {
      question: "What is the correct syntax to declare a variable of type integer in Java?",
      options: ["int myVar;", "myVar int;", "integer myVar;", "int = myVar;"],
      answer: "int myVar"
    },
    {
      question: "Which of the following is used for explicit type casting in Java?",
      options: ["(cast)", "cast()", "(type)", "None of the above"],
      answers: ["(cast)"]
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
          <img src="/images/question5.png" alt="question5"/>
        </div>
      ),
      options: ["Number is greater than 5", "Number is less than 5", "Number is less than or equal to 5", "Number is greater than or equal to 5"],
      answer: "Number is greater than 5"
    },
    {
      question: (
        <div>
          <div className="question-text"> What will be the output of the following code snippet? </div>
          <img src="/images/question6.png" alt="question6" />
        </div>
      ),
      options: ["Day is: Sunday", "Day is: Monday", "Day is: Tuesday", "Day is: Invalid day"],
      answer: "Day is: Tuesday"
    },
    {
      question: (
        <div>
          <div className="question-text"> How many iterations will the following Java loop perform? </div>
          <img src="/images/question7.png" alt="question7" />
        </div>
      ),
      options: ["5", "10", "4", "6"],
      answer: "5"
    }
  ];

  const handleAnswerOptionClick = (selectedAnswer) => {
    // For the second question, allow multiple answers
    if (currentQuestion === 1) {
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
  
    // For the second question
    if (currentQuestion === 1) {
      const correctAnswers = questions[currentQuestion].answers;
      const selectedCorrect = correctAnswers.length === selectedOptions.length && correctAnswers.every(answer => selectedOptions.includes(answer));
      const allCorrectSelected = selectedOptions.every(option => correctAnswers.includes(option));
      if (selectedCorrect && allCorrectSelected) {
        currentScore++;
      }
    } else {
      // For other questions, check if the selected option is correct
      if (selectedOptions.length === 1 && selectedOptions[0] === questions[currentQuestion].answer) {
        currentScore++;
      }
    }
  
    setScore(currentScore);
  
    setSelectedOptions([]);
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  
  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
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
          <button className="next-question-button" onClick={handleNextQuestionClick}>Next Question</button>
        </>
      )}
    </div>
  );
}
