// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   {/* <React.StrictMode>  */}
//     <App />
//   {/* </React.StrictMode> */}
//   </BrowserRouter>
//   , 
// )
// Hay que revisar si el browser va aquí o en el app.jsx.
// Si NO usar este:

// import react from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);