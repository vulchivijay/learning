// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// app.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './style.css';
function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default App;

// header.js
import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

// home.js
import React, { useState } from 'react';
import Header from './header';
import HomeChild from './Home-Child';
export default function Home() {
  var [userDetails, setUserDetails] = useState({
    name: 'Mayank',
    age: 30
  });

  return (
    <div className="home-wrapper">
      <Header />
      <div className="conent">
        <h1>Home page</h1>
        <p>Passing props to event child till where you want them.</p>
        <h3>User Name: {userDetails.name}</h3>
        <h3>User Age: {userDetails.age}</h3>
        <HomeChild userDetails={userDetails} />
      </div>
    </div>
  );
}

// home-child.js
import React from 'react';
import HomeChildChild from './Home-Child-Child';
export default function HomeChild(props) {
  console.log(props);
  return (
    <div className="purple">
      <h1>Home page Child component</h1>
      <h3>User Name: {props.userDetails.name}</h3>
      <h3>User Age: {props.userDetails.age}</h3>
      <HomeChildChild userDetails={props.userDetails} />
    </div>
  );
}

// home child child
import React from 'react';
export default function HomeChildChild(props) {
  console.log(props);
  return (
    <div className="orange">
      <h1>Home page Child component sub Child component</h1>
      <h3>User Name: {props.userDetails.name}</h3>
      <h3>User Age: {props.userDetails.age}</h3>
    </div>
  );
}


// about.js
import React, { useState, createContext } from 'react';
import Header from './header';
import AboutChild from './About-Child';
export const userDetailContext = createContext(null);
export default function About() {
  const [userDetails] = useState({
    name: 'Mayank',
    age: 30
  });

  return (
    <div className="about-wrapper">
      <Header />
      <div className="conent">
        <h1>About page</h1>
        <p />
        <h3>User Name: {userDetails.name}</h3>
        <h3>User Age: {userDetails.age}</h3>
        <userDetailContext.Provider value={userDetails}>
          <AboutChild />
        </userDetailContext.Provider>
      </div>
    </div>
  );
}

// about child
import React from 'react';
import AboutChildChild from './About-Child-Child';
export default function AboutChild(props) {
  return (
    <div className="purple">
      <h1>About page Child component</h1>
      <AboutChildChild />
    </div>
  );
}

// about child child
import React, { useContext } from 'react';
import { userDetailContext } from './About';
export default function AboutChildChild() {
  const contextData = useContext(userDetailContext);
  return (
    <div className="orange">
      <h1>About page Child component sub Child component</h1>
      <h3>User Name: {contextData.name}</h3>
      <h3>User Age: {contextData.age}</h3>
    </div>
  );
}

// contact.js
import React from 'react';
import Header from './header';
export default function Contact() {
  return (
    <div className="contact-wrapper">
      <Header />
      <div className="conent">
        <h1>Contact page</h1>
      </div>
    </div>
  );
}

// styles
h1,
p {
  font-family: Lato;
}
h1,
h2,
h3,
h4 {
  font-weight: 300;
}
nav {
  padding: 0 5px;
  background-color: red;
  border-radius: 5px;
}
nav a {
  position: relative;
  z-index: 0;
  text-decoration: none;
  padding: 5px 15px;
  display: inline-block;
  border-right: 1px solid #fff;
  color: #000;
}
nav a:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: height 300ms;
  background-color: yellow;
}
nav a:hover:before {
  height: 100%;
}

.purple {
  padding: 15px;
  background-color: purple;
  color: #fff;
}

.orange {
  padding: 15px;
  background-color: orange;
  color: #333;
}

