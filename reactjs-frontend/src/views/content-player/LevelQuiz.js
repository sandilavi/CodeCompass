import React, { useState } from 'react';
import styles from './Lquiz.module.css';
import { useLocation } from 'react-router-dom';

const beginnerQuestions = [
    // Variables/Data types
    {
        topic: 'Variables/Data types',
        question: 'Which data type can store a whole number?',
        options: ['int', 'float', 'string', 'boolean'],
        answer: 'int',
    },
    {
        topic: 'Variables/Data types',
        question: 'What keyword is used to declare a variable?',
        options: ['var', 'let', 'const', 'all of the above'],
        answer: 'all of the above',
    },
    // Casting
    {
        topic: 'Casting',
        question: 'How do you convert an integer to a double?',
        options: ['(double) value', '(int) value', 'value.toDouble()', 'value.toInt()'],
        answer: '(double) value',
    },
    {
        topic: 'Casting',
        question: 'What happens when you assign a large integer to a byte variable?',
        options: ['Error', 'Overflow', 'Underflow', 'No effect'],
        answer: 'Overflow',
    },
    // Operators/Booleans
    {
        topic: 'Operators/Booleans',
        question: 'What is the logical AND operator?',
        options: ['&&', '||', '!', '=='],
        answer: '&&',
    },
    {
        topic: 'Operators/Booleans',
        question: 'What does the NOT operator do?',
        options: ['Inverts the value', 'Multiplies by -1', 'Divides by 2', 'None of the above'],
        answer: 'Inverts the value',
    },
    // Strings
    {
        topic: 'Strings',
        question: 'How do you access a specific character in a string?',
        options: ['string[index]', 'string.charAt(index)', 'string.getChar(index)', 'string.getIndex(character)'],
        answer: 'string[index]',
    },
    {
        topic: 'Strings',
        question: 'How do you concatenate two strings?',
        options: ['string1 + string2', 'string1.concat(string2)', 'string1.join(string2)', 'string1.combine(string2)'],
        answer: 'string1 + string2',
    },
];

const intermediateQuestions = [
    // Methods
    {
        topic: 'Methods',
        question: 'What is the purpose of a method in Java?',
        options: [
            'To organize code and improve reusability',
            'To define data types for variables',
            'To control program flow',
            'All of the above',
        ],
        answer: 'All of the above',
    },
    {
        topic: 'Methods',
        question: 'How do you call a method in Java?',
        options: [
            'By referencing its name followed by parentheses',
            'By declaring it inside a loop',
            'By using a keyword like "call"',
            'Methods are automatically called during program execution',
        ],
        answer: 'By referencing its name followed by parentheses',
    },
    // Error/Exception handling
    {
        topic: 'Error/Exception handling',
        question: 'What is the purpose of error handling in Java?',
        options: [
            'To gracefully handle unexpected errors during program execution.',
            'To prevent errors from occurring in the first place.',
            'To make the code more complex and difficult to understand.',
            'Error handling is not necessary in modern programming languages.',
        ],
        answer: 'To gracefully handle unexpected errors during program execution.',
    },
    {
        topic: 'Error/Exception handling',
        question: 'What are the keywords used for error handling in Java?',
        options: [
            'try, catch, finally',
            'if, else if, else',
            'while, do-while, for',
            'public, private, protected',
        ],
        answer: 'try, catch, finally',
    },
    // Scanner
    {
        topic: 'Scanner',
        question: 'What is the purpose of the Scanner class in Java?',
        options: [
            'To read user input from the console.',
            'To perform mathematical calculations.',
            'To format and print output to the console.',
            'To create graphical user interfaces (GUIs).',
        ],
        answer: 'To read user input from the console.',
    },
    {
        topic: 'Scanner',
        question: 'How do you create a Scanner object to read input from the console?',
        options: [
            'Scanner scanner = new Scanner(System.in);',
            'Scanner scanner = System.console();',
            'InputReader reader = new InputReader();',
            'You cannot directly read user input in Java.',
        ],
        answer: 'Scanner scanner = new Scanner(System.in);',
    },
    // Write/Create Files
    {
        topic: 'Write/Create Files',
        question: 'What class can you use to write data to a text file in Java?',
        options: [
            'Scanner',
            'PrintWriter',
            'FileWriter',
            'OutputStream',
        ],
        answer: 'PrintWriter',
    },
    {
        topic: 'Write/Create Files',
        question: 'What class can you use to write data to a binary file in Java?',
        options: [
            'Scanner',
            'PrintWriter',
            'FileWriter',
            'FileOutputStream',
        ],
        answer: 'FileOutputStream',
    },
    // Method overloading
    {
        topic: 'Method overloading',
        question: 'What is method overloading in Java?',
        options: [
            'Creating multiple methods with the same name but different parameter lists.',
            'Reusing a method name for different purposes based on context.',
            'A way to define default values for method parameters.',
            'It is not possible to have multiple methods with the same name in Java.',
        ],
        answer: 'Creating multiple methods with the same name but different parameter lists.',
    },
    {
        topic: 'Method overloading',
        question: 'What are the benefits of using method overloading?',
        options: [
            'Improves code readability and maintainability.',
            'Allows for code reuse with different data types.',
            'Provides flexibility for handling different method calls.',
            'All of the above',
        ],
        answer: 'All of the above',
    },
];

const advancedQuestion = [
    {
        topic: 'Constructor',
        question: 'What is the purpose of a constructor in Java?',
        options: [
            'To initialize an object\'s state when it is created.',
            'To define the data types of an object\'s attributes.',
            'To provide a default value for an object if no arguments are provided.',
            'All of the above',
        ],
        answer: 'All of the above',
    },
    {
        topic: 'Constructor',
        question: 'Can a class have multiple constructors in Java?',
        options: [
            'Yes, this is called constructor overloading.',
            'No, a class can only have one constructor.',
            'It depends on the access modifiers used.',
            'Constructors are automatically generated by the compiler.',
        ],
        answer: 'Yes, this is called constructor overloading.',
    },

    // ArrayList
    {
        topic: 'ArrayList',
        question: 'What is an ArrayList in Java?',
        options: [
            'A resizable array that can dynamically grow and shrink.',
            'A fixed-size collection of primitive data types.',
            'A collection of objects that maintains the order of insertion.',
            'A way to define custom data structures.',
        ],
        answer: 'A resizable array that can dynamically grow and shrink.',
    },
    {
        topic: 'ArrayList',
        question: 'Which methods can you use to add and remove elements from an ArrayList?',
        options: [
            'add(), remove()',
            'get(), set()',
            'push(), pop()',
            'append(), delete()',
        ],
        answer: 'add(), remove()',
    },

    // HashMap
    {
        topic: 'HashMap',
        question: 'What is a HashMap in Java?',
        options: [
            'A collection of key-value pairs, where keys are unique.',
            'An ordered collection of objects.',
            'A way to store and retrieve data based on indexes.',
            'A specialized data structure for storing large datasets.',
        ],
        answer: 'A collection of key-value pairs, where keys are unique.',
    },
    {
        topic: 'HashMap',
        question: 'How do you retrieve a value from a HashMap given its key?',
        options: [
            'get(key)',
            'find(key)',
            'search(key)',
            'value(key)',
        ],
        answer: 'get(key)',
    },

    // Threads
    {
        topic: 'Threads',
        question: 'What is a thread in Java?',
        options: [
            'An independent unit of execution within a program.',
            'A way to break down a program into smaller tasks.',
            'A mechanism for concurrent programming.',
            'All of the above',
        ],
        answer: 'All of the above',
    },
    {
        topic: 'Threads',
        question: 'How do you create a thread in Java?',
        options: [
            'By extending the Thread class.',
            'By implementing the Runnable interface.',
            'Using the Thread.start() method.',
            'Both extending Thread and implementing Runnable.',
        ],
        answer: 'Both extending Thread and implementing Runnable.',
    },

    // Lambda Expressions
    {
        topic: 'Lambda Expressions',
        question: 'What are lambda expressions in Java?',
        options: [
            'A concise way to define anonymous functions.',
            'A feature introduced in Java 8 for functional programming.',
            'Used to simplify code for small, single-use functions.',
            'All of the above',
        ],
        answer: 'All of the above',
    }
]

const expertQuestions = [
    {
        topic: 'Access Modifiers',
        question: 'What are access modifiers in Java?',
        options: [
            'Keywords used to control the visibility of classes, methods, and fields.',
            'A way to define the data types of variables.',
            'Mechanisms for memory management in Java.',
            'Used to specify threading behavior.',
        ],
        answer: 'Keywords used to control the visibility of classes, methods, and fields.',
    },
    {
        topic: 'Access Modifiers',
        question: 'What are the public, private, and protected access modifiers in Java?',
        options: [
            'Public: accessible everywhere, private: only within the class, protected: within the class and subclasses.',
            'Public: accessible everywhere, private: only within the package, protected: within the package and subclasses.',
            'Public: accessible within the class, private: accessible everywhere, protected: not allowed.',
            'These access modifiers are not relevant in modern Java.',
        ],
        answer: 'Public: accessible everywhere, private: only within the class, protected: within the class and subclasses.',
    },

    // Inheritance
    {
        topic: 'Inheritance',
        question: 'What is inheritance in Java?',
        options: [
            'A mechanism for creating new classes (subclasses) based on existing classes (superclasses).',
            'A way to reuse code and functionality from existing classes.',
            'Allows for polymorphism (ability of objects to behave differently).',
            'All of the above',
        ],
        answer: 'All of the above',
    },
    {
        topic: 'Inheritance',
        question: 'What is the keyword used for inheritance in Java?',
        options: [
            'inherit',
            'extends',
            'reuse',
            'subclass',
        ],
        answer: 'extends',
    },

    // Polymorphism
    {
        topic: 'Polymorphism',
        question: 'What is polymorphism in Java?',
        options: [
            'The ability of objects to behave differently in response to the same method call.',
            'A technique for overloading methods with different parameter lists.',
            'Related to inheritance, allowing subclasses to redefine methods inherited from the superclass.',
            'All of the above',
        ],
        answer: 'All of the above',
    },
    {
        topic: 'Polymorphism',
        question: 'What are two types of polymorphism in Java?',
        options: [
            'Static and dynamic polymorphism',
            'Method overloading and method overriding',
            'Compile-time and runtime polymorphism',
            'Inheritance and abstraction',
        ],
        answer: 'Method overloading and method overriding',
    },

    // Encapsulation
    {
        topic: 'Encapsulation',
        question: 'What is encapsulation in Java?',
        options: [
            'The concept of bundling data (fields) and methods that operate on that data into a single unit (class).',
            'A way to hide the implementation details of a class and only expose its public methods.',
            'Protects data integrity by controlling access to fields.',
            'All of the above',
        ],
        answer: 'All of the above',
    },
    {
        topic: 'Encapsulation',
        question: 'How is encapsulation achieved in Java?',
        options: [
            'By using private fields and public methods with access to those fields.',
            'By declaring classes as final.',
            'By using access modifiers effectively.',
            'Encapsulation is not a concept in Java.',
        ],
        answer: 'By using private fields and public methods with access to those fields.',
    },
];

function Question({ question, onAnswer }) {
    return (
        <div className={styles.question} >
            <h3>{question.topic}</h3>
            <p>{question.question}</p>
            <ul>
                {question.options.map((option) => (
                    <li key={option}>
                        <button onClick={() => onAnswer(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div >
    );
}

function LevelQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const location = useLocation();
    const level = location.state;

    const loadQues = () => {
        let qs = [];
        if (level === "Beginner") {
            qs = beginnerQuestions;
        } else if (level === "Intermediate") {
            qs = intermediateQuestions
        } else if (level === "Advanced") {
            qs = advancedQuestion;
        } else {
            qs = expertQuestions;
        }

        return qs;
    }


    const handleAnswer = (option) => {
        if (option === loadQues()[currentQuestion].answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className={styles.quiz}>
            <h1>{`${level} Java Quiz`}</h1>
            {currentQuestion < loadQues().length ? (
                <Question question={loadQues()[currentQuestion]} onAnswer={handleAnswer} />
            ) : (
                <div className={styles.results}>
                    <h2>You finished the quiz!</h2>
                    <p>Your score: {score} / {loadQues().length}</p>
                </div>
            )}
        </div>
    );
}

export default LevelQuiz;