import React from 'react';
import '../../bootstrap.min.css'
import './app.css';
import Header from "../header/header";
import RandomBird from "../random-bird/random-bird";
import Answer from "../Answers/answers";


function App() {
  return (
      <div className={'container'}>
          <Header />
          <RandomBird />
          <Answer />
      </div>
  );
}

export default App;
