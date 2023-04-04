import React from 'react';
import './App.scss';
import { BrowserRouter} from "react-router-dom";
import { Footer, Home, About, Contact, Skills, Projects } from './containers';
import { Navbar } from './components/';

const App = () => {
  return (
      <div className='app'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App;
