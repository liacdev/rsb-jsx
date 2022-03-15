import logo from "./logo.svg";
import "./App.css";
import JSX from "./Components/jsx.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React JSX</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <JSX />
      </header>
    </div>
  );
}

export default App;
