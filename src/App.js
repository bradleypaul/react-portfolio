import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <header className="flex-row px-1">
          <h2>
              Paul Bradley
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <NavLink exact to="/" activeStyle={{
                  color: '#F3A847'
                }}>About Me</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/Portfolio" activeStyle={{
                  color: '#F3A847'
                }}>
                  Portfolio
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/Contact" activeStyle={{
                  color: '#F3A847'
                }}>Contact</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/Resume"
                  activeStyle={{
                    color: '#F3A847'
                  }}>Resume</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Contact">
              <ContactForm />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
