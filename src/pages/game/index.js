// Importo el hook que me permite navegar entre las rutas de la aplicación
import {useNavigate} from 'react-router-dom';

// Importo los componentes
import Button from '../../Components/Button';

function Game() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="dreadcrumb" aria-label="dreadcrumbs">
                    <ul>
                        <li className='is-active'>
                            <a href="/">
                                <span className="icon">
                                    <i className="fas fa-home" aria-hidden="true"></i>
                                </span>
                                <span>Inicio</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <section className="hero is-info is-medium">
                    <div className="hero-body">
                        <p className="title">Esta es la página del juego</p>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Game;