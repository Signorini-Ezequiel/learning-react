import './header.css';
import Button from '../Button';

function Header(){
    return(
        <div className="header">
            <nav>
                <ul className='left'>
                    <li><a href="">Ayuda</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Descargas</a></li>
                    <li><a href="/">Inicio</a></li>
                </ul>
                <ul className="right">
                    <Button content="Juego" link='/game'/>
                </ul>
            </nav>
        </div>
    );
}

export default Header;