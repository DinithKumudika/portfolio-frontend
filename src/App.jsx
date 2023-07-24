import React from 'react';
import './App.scss';
import { styles } from './style';
import { About, Home } from './containers';
import { Navbar } from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Home id={'home'} title={'Home'}/>
  </div>
);

export default App;
