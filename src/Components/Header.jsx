import Button from './button.jsx';

function Header(){
    return(
        <div className="header">
            <nav>
                <ul className='left'>
                    <li><a href="/">Ayuda</a></li>
                    <li><a href="/">Contacto</a></li>
                    <li><a href="/">Descargas</a></li>
                </ul>
                <ul className="right">
                    <Button content="Inicio"/>
                </ul>
            </nav>
        </div>
    );
}

export default Header;