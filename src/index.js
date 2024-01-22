import React from 'react';
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
)
