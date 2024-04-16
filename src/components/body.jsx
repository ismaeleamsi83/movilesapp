import { db } from "../data/db"
import '../App.css'

export function Body(){
    return(
        <>
            
            <div className="box-items">
            {db.map((movil)=>(
                <div key={movil.id} className="item"> 
                    <img src={movil.imagen_referencia} alt="" />
                    <h3>{movil.titulo}</h3>
                    <p>{movil.descripcion}</p>
                    <span>{movil.precio}€</span>
                    <button>Agregar al Carrito</button>
                    {/* console.log("Movil: ", movil); */}
                </div>
            ))}
            </div>
        </>
    )
}