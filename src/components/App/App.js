import './App.css';
import GenerateButton from '../GenerateButton/GenerateButton';

function App() {
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
