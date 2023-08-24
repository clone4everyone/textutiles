import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react';

import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
   Link
} from 'react-router-dom';


function App() {
  const [mode, setmode] = useState(`light`);
  const [text, settext] = useState(`on dark mode`);

  function modes() {

    if (mode === `light`) {
      setmode(`dark`);
      document.body.style.backgroundColor = `black`;
      settext(`off dark mode`);

    }
    else {
      setmode(`light`);
      settext(`on dark mode`);
      document.body.style.backgroundColor = `white`;
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" about="about text" mode={mode} modes={modes} text={text} />
        
        <div className='container my-3'>
          <Switch>
          
            <Route exact path="/">
              <Textform/>
            </Route>
            <Route exact path="/about">
            <About mode={mode}/>
            </Route>
            <Route exact path="/home">
            <Textform />
            </Route>
            
          </Switch>
        </div>


      </Router>

    </>
  );
}
export default App;
