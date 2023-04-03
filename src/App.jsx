import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, Footer, Home, About, Contact, Skills, Projects } from './containers';
import { client, urlFor } from './client';

const App = () => {
  return (
      <div className='app'>
        <Header/>
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
