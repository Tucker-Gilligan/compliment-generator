import Compliment from '../Compliment/Compliment';
import ComplimentApiService from '../../services/compliment-api-service';
import React, { useState, useEffect } from 'react';

const GenerateButton = props => {
  const [compliments, setCompliments] = useState([]);
  const [compliment, setCompliment] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    ComplimentApiService.getCompliments()
      .then(compliments => {
        setCompliments(compliments);
      })
      .catch(setError(error));
  }, [error]);

  const handleClick = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const id = Math.floor(Math.random() * (max - min + 1) + min);

    ComplimentApiService.getComplimentById(id)
      .then(compliment => setCompliment(compliment.content))
      .catch(setError(error));
  };

  return (
    <>
      <button onClick={() => handleClick(1, compliments.length)}>
        Click me!
      </button>
      <Compliment compliment={compliment} />
    </>
  );
};

export default GenerateButton;
