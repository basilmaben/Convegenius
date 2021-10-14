import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./backgroundQ!.jpg)"}}>
        <Header />
        <Switch>

          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/quiz' exact>
            <Quiz/>
          </Route>
          <Route path='/result' exact>
            <Result/>
          </Route>
          
        </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
