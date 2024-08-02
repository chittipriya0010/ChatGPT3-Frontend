import React from 'react'

import { Features, Blog, Header, Footer, WhatGPT3, Possibility } from './containers';
import { Brand, CTA, Navbar, } from './components';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App