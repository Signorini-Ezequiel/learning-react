// import logo from './logo.svg';
import './App.css';
import Button from './Components/button.jsx';
import Header from './Components/Header.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Header/>
        <Button content="Saber más" alert="La funcionalidad no está creada, saludos"/>
      </header>
    </div>
  );
}

// Exporto la aplicación para implementarla en el HTML
export default App;