import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import React, {useState} from 'react';

import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';

import './App.css';

export default function App() {
  const [showMenu, setShowMenu] = useState(false)

  let navlink = "navlinks";

  if(showMenu){
    navlink += "show";
  }

  return (
    <Router>
      <div>
        <header className="navbar">
          {/* Logo */}
          <div className="navbar-container">
            <div className="logo">
              <h3>MATIN</h3>
            </div>
            <i onClick={() => setShowMenu(!showMenu)} className="material-icons hamburger-menu">menu</i>
          </div>
          {/* Navlink */}
          <nav className={navlink}>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <footer>
          &copy; 2021 Matin Tyson
        </footer>
      </div>
    </Router>
  );
}
