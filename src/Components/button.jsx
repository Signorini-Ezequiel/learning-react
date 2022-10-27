// Importo el estilo CSS del componente
import './button.css';
// Estructura de un componente en donde incluyo props para personalizar información cada vez que se usa
function Button (props){
    return(
        // Creo el contenido a mostrar por el componente, que usa los props
        // <button className="basic-button">{props.content}</button>
        // Creo un botón aplicando estilos desde Bulma
        <button className="button is-primary">{props.content}</button>
        // is-primary: color primario
        // is-large: agranda el botón
    );
}

// Estructura para exportar un componente y permitir su uso
export default Button;