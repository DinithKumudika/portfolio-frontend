import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import { styles } from './style';
import { About, Home } from './containers';
import { Navbar } from './components/';

const App = () => (
  <div className='app w-full overflow hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}></div>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
    <div className={`app__primarybg ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    <div className={`app__primarybg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>
    </div>
  </div>
);

export default App;
