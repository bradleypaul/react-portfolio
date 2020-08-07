import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <h2>Proficiencies</h2>
        <ul>
          <li>JavaScript (EcmaScript 6+)</li>
          <li>HTML 5</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>Python 3</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>MySQL/MariaDB</li>
          <li>Angular</li>
          <li>React</li>
          <li>Vue.js</li>
          <li>Continuous Integration/Continuous Deployment</li>
          <li>Teaching junior devs</li>
        </ul>
        <p>
          <a href="https://drive.google.com/file/d/1E76A9-O3V4jl3igZR7QSwb7bFVGNzzGf/view?usp=sharing">
            Resume as Word Document
          </a>
        </p>
        <p>
          <a href="https://drive.google.com/file/d/19cuhshsGHZ19t5fUEwuF9-IPgAgHHz-0/view?usp=sharing">
            Resume as PDF
        </a>
        </p>
      </div>
    );
  }

}

export default Resume;