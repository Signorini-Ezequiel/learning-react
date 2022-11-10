// Importo el hook que me permite navegar entre las rutas de la aplicación
import { useNavigate, Link } from 'react-router-dom';
// Importo el hook que permite cambiar de estados a un componente
import { useState } from "react";
// Importo los componentes
import Button from '../../Components/Button';
import Header from '../../Components/Header';
// Importo el banner desde assets
import fondo from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';


// Creo el componente Home
function Home() {
    // Creo la variable que almacenará la funcionalidad de useNavigate
    const navigate = useNavigate();
    // Creo una función para ir a las url por medio de useNavigate
    const onClickButton = url => {
        navigate(url);
    };

    // Establezco un hook, use state para cambiar el fondo cuando se le haga click
    const [changeBackground, setChangeBackground] = useState(fondo);

    // Establesco el código a retornar
    return (
        <div className="App">
            <header className="App-header">
                {/* Uso el componente */}
                <Header/>

                {/* Uso el componente, poniendo la información de sus props */}
                {/* <Button content="Saber más" onclick={()=>alert(alert="La funcionalidad no está creada, saludos")}/> */}
                
                {/* Creo un botón que implementa la función onClickButton para ir a la ruta indicada */}
                {/* Implemento Bulma para los estilos */}
                
                <section className='hero is-medium is-fullheight' style={{backgroundImage:`url(${changeBackground})`, backgroundSize:'cover'}}>
                    <div className='hero-body'>
                        <div className='container has-text-centered'>
                            {/* Uso onclickButton para navegar a game */}
                            <Button onClick={() => onClickButton("/game")} content="Ezequiel Signorini" className='title mb-6'/>
                            <br/>
                            <button onClick={() => setChangeBackground(fondo2)} className="button is-light">Cambiar fondo</button>
                            {/* También puedo ejecutarlo directamente desde navigate */}
                            {/* <Button onClick={() => navigate('/game')} content="Ezequiel Signorini" className='title'/> */}
                        </div>
                    </div>
                </section>

                {/* Para ir a un sitio puedo usar Link to, que funciona como un a href */}
                {/* <Link to="/">Inicio</Link> */}
            </header>
        </div>
    );
}

export default Home;