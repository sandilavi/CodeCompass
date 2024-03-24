import React from 'react';
import './Contents.css'; // Import the CSS file



function Content() {
    const element = () => {
        return (
            <div className="container">
                <h1>Java Variables Guide</h1>
                <p>Variables are fundamental components in Java programming. They are used to store data values that can be referenced and manipulated throughout the program.</p>

                <h2>What is a Variable?</h2>
                <p>A variable in Java is a container that holds data values. These values can be of different types, such as integers, floating-point numbers, characters, or more complex types like objects.</p>

                <h2>Declaring Variables</h2>
                <p>In Java, you declare a variable by specifying the data type and the name of the variable:</p>
                <pre><code>data_type variable_name;</code></pre>
                <p>For example:</p>
                <pre><code>int age;<br />double salary;</code></pre>

                <h2>Initializing Variables</h2>
                <p>You can also initialize a variable when you declare it, by assigning a value to the variable:</p>
                <pre><code>data_type variable_name = value;</code></pre>
                <p>For example:</p>
                <pre><code>int age = 25;<br />double salary = 1000.50;</code></pre>

                <h2>Variable Naming Rules</h2>
                <ul>
                    <li>Variable names in Java are case-sensitive.</li>
                    <li>A variable name must begin with a letter (A-Z or a-z), dollar sign ($), or underscore (_) character.</li>
                    <li>After the first character, a variable name can contain letters, digits (0-9), dollar signs, and underscores.</li>
                    <li>Java keywords cannot be used as variable names.</li>
                </ul>

                <h2>Data Types</h2>
                <p>Java supports several data types for variables. Some of the commonly used ones include:</p>
                <ul>
                    <li><code>int</code>: Used for integers.</li>
                    <li><code>double</code>: Used for floating-point numbers.</li>
                    <li><code>boolean</code>: Used for representing true or false values.</li>
                    <li><code>char</code>: Used for representing single characters.</li>
                    <li><code>String</code>: Used for storing sequences of characters.</li>
                </ul>

                <h2>Example</h2>
                <p>Here's a simple example demonstrating the declaration, initialization, and usage of variables in Java:</p>
                <pre><code>public class Main {'{'}<br />    public static void main(String[] args) {'{'}<br />        // Declare and initialize variables<br />        int age = 25;<br />        double salary = 1000.50;<br />        boolean isEmployed = true;<br />        char gender = 'M';<br />        String name = "John Doe";<br /><br />        // Print out variable values<br />        System.out.println("Name: " + name);<br />        System.out.println("Age: " + age);<br />        System.out.println("Salary: $" + salary);<br />        System.out.println("Employed: " + isEmployed);<br />        System.out.println("Gender: " + gender);<br />    {'}'}<br />{'}'}</code></pre>
            </div>
        );
    }
    return (
        <>
            {element()}
        </>
    );
}

export default Content;