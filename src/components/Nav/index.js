import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected
  } = props;
  function toggleActive(e) {
    
  }
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Paul Bradley
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          <li>
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;