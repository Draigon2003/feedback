import Header from "./componentes/Header";
import Feedbackitem from "./componentes/Feedbackitem";
function App(){
    //objeto de estilos
    const HeaderStyles ={
        backgroundColor:'white',
        color:'black'
    }

    return(
        <div className="container">  
            {/*props: atributos de etiqueta de un componente*/ }      
            <Header 
            bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color}    />
                <Feedbackitem />
                <Feedbackitem />
                <Feedbackitem />
                <Feedbackitem />
        </div>

    )
}

export default App;