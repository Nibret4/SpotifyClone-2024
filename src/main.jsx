import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerContaxtprovider from './context/PlayerContaxt.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContaxtprovider>
        <App />
      </PlayerContaxtprovider>
    </BrowserRouter>
  </React.StrictMode>
);
