import './App.css';
// Importo los componentes
import Button from './Components/button.jsx';
import Header from './Components/Header.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Uso el componente */}
        <Header/>
        {/* Uso el componente, poniendo la información de sus props */}
        <Button content="Saber más" alert="La funcionalidad no está creada, saludos"/>
      </header>
    </div>
  );
}

// Exporto la aplicación para implementarla en el HTML
export default App;