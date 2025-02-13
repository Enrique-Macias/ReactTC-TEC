import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Alaia Macías';
  const saludar = <h1>Hola, soy {name}</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World! {22/2 + 7}</p>
        <p>{saludar}</p>
        <h2>It is {n}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
