// Importo el CSS propio
import './App.css';
// Importo el framework Bulma
import 'bulma/css/bulma.min.css';
// Importo React-router-dom que es una librería de react para manejar rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Importo las páginas a rutear
import Home from './pages/home';
import Game from './pages/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* BrowserRouter nos permite conectar nuestra aplicación con la URL del browser */}
        <BrowserRouter>
        {/* Routes y route son los elementos que nos permiten configurar las rutas de nuestra aplicación */}
          <Routes>
            {/* Las rutas deben tener un path y un element */}
            <Route path='/' element={<Home/>}/>
            <Route path='/game' element={<Game/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

// Exporto la aplicación para implementarla en el HTML
export default App;