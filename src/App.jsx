import React from 'react';
import './App.scss';
import { Navbar, ScrollToTop, SideBar } from './components'
import { About, Education, Home } from './containers';

const App = () => (
  <div className='w-full overflow-hidden'>
    <Navbar />
    <SideBar/>
    <Home id={'home'} title={'Home'} />
    <About id={'about'} title={'About'} />
    <Education id={'education'} title={'Education'} />
    <ScrollToTop />
  </div>
);

export default App;
