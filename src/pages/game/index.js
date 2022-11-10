// Importo el hook que me permite navegar entre las rutas de la aplicación
import {useNavigate} from 'react-router-dom';

// Importo los componentes
import Header from '../../Components/Header';

function Game() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <section className="hero is-info is-medium is-fullheight">
                    <div className="hero-body">
                        <p className="title">Esta es la página del juego</p>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Game;