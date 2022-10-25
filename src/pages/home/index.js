// Importo el hook que me permite navegar entre las rutas de la aplicación
import {useNavigate} from 'react-router-dom';

// Importo los componentes
import Button from '../../Components/button';
import Header from '../../Components/header';

// Creo el componente Home
function Home() {
    // Creo la variable que almacenará la funcionalidad de useNavigate
    const navigate = useNavigate();
    // Creo una función para ir a las url por medio de useNavigate
    const onClickButton = url => {
        navigate(url);
    };

    // Establezco un hook, use state para cambiar el color de un botón cuando se le haga click
    const [color, setColor] = useState(initialColor);

    // Establesco el código a retornar
    return (
        <div className="App">
            <header className="App-header">
            {/* Uso el componente */}
                <Header/>
                {/* Uso el componente, poniendo la información de sus props */}
                {/* <Button content="Saber más" onclick={()=>alert(alert="La funcionalidad no está creada, saludos")}/> */}
                {/* Creo un botón que implementa la función onClickButton para ir a la ruta indicada */}
                <Button onclick={() => onClickButton("/game")} content="Ezequiel Signorini"/>

                {/* Para ir a un sitio puedo usar Link to, que funciona como un a href */}
                {/* <Link to="/">Inicio</Link> */}
                {/* Creo un botón que cambie de color con el uso de useState */}
                
            </header>
        </div>
    );
}

export default Home;