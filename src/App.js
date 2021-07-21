import './App.css';

import './components/javascript/Single-threaded';
import './components/javascript/OOPs';

import {WelcomeDialog, CompositionLayout, CompositionWelcome, SignUpDialog}  from './components/react/Composition-Inheritance';
import RHCheckboxWithLabel from './components/react/PS-RHooksCheckwithLabel';
import RHTablewithSort from './components/react/PS-RHooksTableSort';

function App() {
  return (
    <div className="app-container">
      <h1>JavaScript :</h1>
      <ol>
        <li>
          Javascript is a single threaded?
          <p>JS is a single threaded which means only one statement is executed at a time. Before we dive into what it means by it runs on single thread. I would want to first go over the terminology that will help you in understanding. Synchronous (or sync) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.</p>
        </li>
        <li>
          Classes:
          <ol>
            <li>
              Using Constructor functions (#constructor-functions)
            </li>
            <li>
              Using Classes (#class-syntax)
            </li>
            <li>
              Using Objects Linking to Other Objects (OLOO) (#oloo): we define the blueprint as a normal object. You then use a method (often named init , but that isn’t required in the way constructor is to a Class) to initialize the instance. 
            </li>
            <li>
              Using Factory functions (#factory-functions): Factory functions are functions that return an object. You can return any object. You can even return a Class instance or OLOO instance — and it’ll still be a valid Factory function.
            </li>
          </ol>
        </li>
        <li>
          Class inheritance: Inheritance is a loaded word. Many people in the industry use Inheritance incorrectly, in my opinion. The word “inheritance” is used when you receive things from somewhere. For example:
          <ol>
            <li>If you get an inheritance from your parents, it means you get money and assets from them.</li>
            <li>If you inherit genes from your parents, it means you get your genes from them.</li>
            <li>If you inherit a process from your teacher, it means you get that process from them.</li>
          </ol>
          This means all instances actually inherit from their blueprints. They inherit properties and methods in two ways: (#classes-vs-factory-functions-inheritance) (#what-is-inheritance)
          <ol>
            <li>by creating a property or method directly upon creating the instance</li>
            <li>via the Prototype chain</li>
          </ol>
        </li>
        <li>
          Class encapsulation: Encapsulation is the act of enclosing one thing inside another thing so the thing inside doesn’t leak out. Think about storing water inside a bottle. The bottle prevents water from leaking out.
          To continue the discussion on Classes and Factory functions, we need to understand three concepts that are tied closely to Object-Oriented Programming:
          <ol>
            <li>Inheritance</li>
            <li>Encapsulation</li>
            <li>
              this
              <ol>
                <li>In a global context</li>
                <li>In an object construction</li>
                <li>In an object property / method</li>
                <li>In a simple function</li>
                <li>In an arrow function</li>
                <li>In an event listener</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
      <h1>React :</h1>
      <ol>
        <li>
          React Composition vs Inheritance:
          <p>React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>
          <WelcomeDialog />
          <p>Different way:</p>
          <CompositionWelcome/>
          <CompositionLayout />
          <SignUpDialog />
        </li>
        <li>
          <p>React problem solving:</p>
          <ol>
            <li>
              <p>React Hook - Check box with label (useState, useEffect, fakeapi call)</p>
              <RHCheckboxWithLabel />
            </li>
            <li>
              <p>React Hook - table data with sort firstname and last name column (useState, useEffect, fakeapi call)</p>
              <RHTablewithSort />
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default App;
