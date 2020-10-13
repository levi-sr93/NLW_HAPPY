import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from '../src/images/Logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy Logo"/>

        <main>
          <h1>Bring Happyness for the world!</h1>
          <p>Go visit Orphanages and change the day of many children</p>
        </main>

        <div className="location">
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </div>

        <a href="" className="enter-app">
          >
        </a>
      </div>
    </div>
  );
}

export default App;
