import React from 'react';
import {FiArrowRight} from 'react-icons/fi';

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
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
