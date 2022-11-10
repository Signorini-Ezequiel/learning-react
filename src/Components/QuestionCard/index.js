function QuestionCard({ preguntaActual }) {
    console.log(preguntaActual.answers);
    return(
        <>
            <span>{preguntaActual.question}</span>
            <br/>
            {
                preguntaActual.answers.map((option) => (
                    <>
                    <span>{option.answer}</span>
                    <br/>
                    </>
                ))
            }
            <br/>
        </>
    )
}

export default QuestionCard;