import './App.css';
import GenerateButton from '../GenerateButton/GenerateButton';
// import React, { useState, useEffect } from 'react';
// import ComplimentApiService from '../../services/compliment-api-service';
// import Compliment from '../Compliment/Compliment';

function App() {
  // const [compliments, setCompliments] = useState([]);
  // const [compliment, setCompliment] = useState('');
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setError(null);
  //   ComplimentApiService.getCompliments()
  //     .then(compliments => {
  //       setCompliments(compliments);
  //     })
  //     .catch(setError(error));
  // }, [error]);

  // const handleClick = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   const id = Math.floor(Math.random() * (max - min + 1) + min);

  //   ComplimentApiService.getComplimentById(id)
  //     .then(compliment => setCompliment(compliment.content))
  //     .catch(setError(error));
  // };
  return (
    <div className="App">
      <header className="App__header">Random Compliment Generator</header>
      <hr />
      <div className="compliment__content">
        <p>
          Click for your <span>random compliment</span>
        </p>
        <GenerateButton />
      </div>
    </div>
  );
}

export default App;
