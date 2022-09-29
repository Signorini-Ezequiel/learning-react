// Estructura de un componente
function Button (props){
    let buttonDoc = document.querySelector('.basic-button');
    buttonDoc.addEventListener('click', function () {alert(props.alert);});
    return(
        <button className="basic-button">{props.content}</button>
    );
}

// Estructura para exportar un componente y permitir su uso
export default Button;