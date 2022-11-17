// Importo los componentes
import Header from '../../Components/Header';
// Importo el hook que permite cambiar de estados a un componente
import { useState, useEffect } from "react";
import QuestionCard from '../../Components/QuestionCard';

// Importo la API
const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {
    // Establezco un hook, use state para poner un loader mientras se carga la API
    const [loading, setLoading] = useState(true);
    // Establezco un hook, use state para cargar las preguntas de la API en un array
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false)) // Sirve para que muestre la información al terminar de cargar la API
    }, []); // Con [] especificamos que solo se renderice al cargar la página


    
    return (
        <div className="container">
            <header className="App-header">
                <Header/>
                {
                    loading && (
                        <div>Cargando...</div>
                    )
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((pregunta) => {
                                    return <QuestionCard key={pregunta.id} preguntaActual={pregunta}/>
                                })
                            }
                        </form>
                    )
                }
                {/* Otra forma de poner un loader es */}
                {/* <div>{loading ? 'Cargando...' : 'Preguntas cargadas'}</div> */}
            </header>
        </div>
    );
}

export default Game;