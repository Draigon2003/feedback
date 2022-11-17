import { useState } from "react";

const Feedbackitem = () =>{

    const [ rating,setRating ] = useState(2)
    const [ text,setText ] = useState("mejorar cursos, mejores vistas de yerson")

    const cambiarNota=()=>{
        setRating((prev)=>{
            return prev + 1
        })
    }
    const disminuir=()=>{
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-dislay">
                { text }
            </div>
            <br />
            <button className="btn" onClick={ cambiarNota }>
                Cambiar nota
            </button>
            <br /><br />
            <button className="btn" onClick={ disminuir }>
                Cambiar nota
            </button>
        </div>
    )
}

export default Feedbackitem;