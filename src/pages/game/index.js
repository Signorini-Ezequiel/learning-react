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
    // Establezco un estado para avisar cuando una respuesta es elegida
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    // Establezco un estado para calcular el resultado mientras se responde
    const [result, setResult] = useState(0);
    // Establezco un estado para conocer si se debe mostrar el resultado o no
    const [mostrarResultado, setMostrarResultado] = useState(false);

    // Creo una función en que se va a calcular el resultado de las respuestas correctas del cuestionario
    function calcularResultado(){
        const respuestasCorrectas = selectedAnswers.filter((respuesta) => respuesta.valorOpcion === true);
        setResult(respuestasCorrectas.length);
        setMostrarResultado(true);
    };

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
                                    return <
                                        QuestionCard key={pregunta.id}
                                        preguntaActual={pregunta}
                                        selectedAnswers={selectedAnswers}
                                        setSelectedAnswers={setSelectedAnswers}
                                        mostrarResultado={mostrarResultado}
                                        /> 
                                        // Pongo como clave el ID de la pregunta, con la pregunta actual y las respuestas seleccionadas para contabilizarlas
                                })
                            }
                        </form>
                    )
                }
                {/* Otra forma de poner un loader es */}
                {/* <div>{loading ? 'Cargando...' : 'Preguntas cargadas'}</div> */}
                <div className='level-right'>
                    {/* ¿Qué significa '&&'? */}
                    {/* Establezco una verificación para mostrar el resultado solo si se respondieron a todas las preguntas */}
                    {
                        mostrarResultado &&
                        <p>{result}</p>
                    }
                    {/* Creo un botón para hacer la validación de datos */}
                    {/* <button disabled={disabled} onClick={() => console.log('hola')} className='button is-primary level-item'>Validar</button> */}
                    <Button disabled={
                        selectedAnswers?.length !== questions?.length
                    } onClick={() => calcularResultado} text='validar'> </Button>
                </div>
            </header>
        </div>
    );
}

export default Game;