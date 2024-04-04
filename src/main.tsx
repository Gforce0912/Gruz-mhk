import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import styled, { createGlobalStyle } from "styled-components";


const AboutGlobal = createGlobalStyle`
*{
  margin: 0px;
  padding: 0;
  font-weight: 400;
}
body{
  overflow-x: hidden;
}
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <AboutGlobal/>
    <App/>
  </React.StrictMode>
)
