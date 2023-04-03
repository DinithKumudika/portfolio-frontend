import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, Footer, About, Contact, Skills, Projects } from './containers';
import { client, urlFor } from './client';

const App = () => {
  return (
      <h1>Hello world</h1>
  )
}

export default App;
