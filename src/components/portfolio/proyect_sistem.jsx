import React from "react";
import Sistem1 from "../../assets/Sales/Admin_information.png"
import Sistem2 from "../../assets/Sales/admin_insert.png"
import Sistem3 from "../../assets/Sales/Admin_proucto.png"
import Sistem4 from "../../assets/Sales/admin_venta.png"
import Sistem5 from "../../assets/Sales/Admin.png"
import Sistem6 from "../../assets/Sales/Bodega.png"
import Sistem7 from "../../assets/Sales/Sesion.png"
import Sistem8 from "../../assets/Sales/vendedor.png"



const Sistem = () =>{
    var images = [Sistem1, Sistem2, Sistem3, Sistem4, Sistem5, Sistem6, Sistem7, Sistem7, Sistem8]
    return(
    <div id="proyect_sistem" className="container_proyects hidden">
        <div className="proyect-title">
            <h2>Sales interface in HTML CSS and JAVASCRIPT</h2>
        </div>
        <ul className="lista_proyectos">
            {images.map((imagen, index)=>(
                <li key={index} className="proyect">
                    <img src={imagen} className="img_proyect" alt={`Imagen ${index+1}`} />
                </li>
    ))}
        </ul>
    
    </div>

    )
}
export default Sistem