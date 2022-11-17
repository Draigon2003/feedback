import  propTypes from "prop-types";

const Header = ({ bgColor, color}) =>{

    return(
        <header style={{backgroundColor: bgColor, 
                        color:color} }>
            Encabezado
        </header>
    )
}

//Valores por defecto para los props suministradas
Header.defaultProps={
    bgColor:'rgba(0,0,0,0.5)',
    color:'#ff6a95'
}


Header.propTypes={
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}
export default Header;