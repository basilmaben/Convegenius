import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./backgroundQ!.jpg)"}}>
      <Header/>
      </div>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
