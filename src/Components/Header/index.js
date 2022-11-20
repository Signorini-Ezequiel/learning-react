import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <div className="header">
            <nav>
                <ul className='left'>
                    <Link to="/">Ayuda</Link>
                    <Link to="/">Contacto</Link>
                    <Link to="/">Descargas</Link>
                    <Link to="/">Inicio</Link>
                </ul>
                <ul className="right">
                    {/* <Button text="Juego" onClick="/game"/> En React se emplea Link*/}
                    <Link to="/game">Juego</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Header;