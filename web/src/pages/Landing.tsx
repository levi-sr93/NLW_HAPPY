import React from 'react';
import {Link} from 'react-router-dom';

import {FiArrowRight} from 'react-icons/fi';

import '../styles/pages/landing.css';

import logoImg from '../images/Logo.svg';

const Landing = () => {
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

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  )
}

export default Landing;