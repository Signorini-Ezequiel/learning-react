function QuestionCard({ preguntaActual, selectedAnswers, setSelectedAnswers, mostrarResultado }) {
    console.log(preguntaActual.answers);

    function seleccionarRespuesta(valorid, valorOpcion) {
        // console.log(`La respuesta ${valorid} es ${valorOpcion}`);
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== valorid);
        setSelectedAnswers([
            ...otrasRespuestas,
            {
                id:valorid,
                valorOpcion
            }
        ]); // Establezco los cambios en una réplica del objeto con los valores actualizados
    };

    return(
        <div className="box">
            <div className="mi-clase">
                <span className="tag is-rounded is-info">{preguntaActual.id}</span>
                <span><strong>{preguntaActual.question}</strong></span>
                <br/>
                {
                    preguntaActual.answers.map((option) => (
                        <div key={option.id} onChange={() => seleccionarRespuesta(preguntaActual.id, option.is_correct)}>
                            <input type="radio"
                            id={`${preguntaActual.id}`}
                            name={preguntaActual.id}
                            value={option.answer}
                            ></input>
                            <label
                            htmlFor={`${preguntaActual.id}`}
                            // Agrego la clase para el color que indica si está bien o mal la respuesta en base a si se muestra el resultado, True: ve si la opción es correcta o no y establece el color, False: no establece ninguna clase
                            className={
                                mostrarResultado ? 
                                option.is_correct ? 'has-text-primary' : 'has-text-danger'
                                : ''
                            }
                            >
                                {option.answer}
                            </label>
                    <br/>
                    </div>
                ))
            }
            <br/>
        </div>
        </div>
    )
}

export default QuestionCard;