import React, { useState } from 'react';
import './Quiz.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const questions = [
    {
      question: "What is the full form of JVM?",
      options: ["Java Virtual Machine", "Java Virtual Module", "Java Virtual Method", "None of the above"],
      answer: "Java Virtual Machine"
    },
    {
      question: "Which of the following can be used to declare and initialize an array in Java?",
      options: ["int[] numbers = new int[5];", "int numbers[5] = {1, 2, 3, 4, 5};", "int numbers = {1, 2, 3, 4, 5};", "List<int> numbers = new ArrayList<int>(5);"],
      answers: ["int[] numbers = new int[5];", "int numbers[5] = {1, 2, 3, 4, 5};"]
    },
    {
      question: "_____ is used to find and fix bugs in the Java programs.",
      options: ["JVM", "JRE", "JDK", "JDB"],
      answer: "JDB"
    },
    {
      question: "What is the use of the println method?",
      options: ["It is used to print text on the screen.", "It is used to print text on the screen with the line break.", "It is used to read text from keyboard.", "It is used to read text from a file."],
      answer: "It is used to print text on the screen with the line break."
    },
    {
      question: "Which one of the following is the first strictly OOP language?",
      options: ["C", "C++", "Java", "C#"],
      answer: "Java"
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
              <span>Question {currentQuestion + 1}</span>/{questions.length}
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
