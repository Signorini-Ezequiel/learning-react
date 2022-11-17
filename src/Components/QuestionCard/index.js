function QuestionCard({ preguntaActual }) {
    console.log(preguntaActual.answers);
    return(
        <div className="box">
            <div className="mi-clase">
                <span className="tag is-rounded is-info">{preguntaActual.id}</span>
                <span><strong>{preguntaActual.question}</strong></span>
                <br/>
                {
                    preguntaActual.answers.map((option) => (
                        <div key={option.id}>
                            <input type="radio" id={`${option.id}`} value={option.answer} name={option.id}></input>
                            <label htmlFor={`${option.id}`}>{option.answer}</label>
                    <br/>
                    </div>
                ))
            }
            <br/>
        </div>
        </div>
    )
}

export default QuestionCard