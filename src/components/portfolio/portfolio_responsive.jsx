import React from "react";
import Responsive1 from "../../assets/Proyecto_responsive/Main_anuncio.png"
import Responsive2 from "../../assets/Proyecto_responsive/main_escolar.png"
import Responsive3 from "../../assets/Proyecto_responsive/Main.png"
import Responsive4 from "../../assets/Proyecto_responsive/sandalias_buscar.png"
import Responsive5 from "../../assets/Proyecto_responsive/sandalias_comprar.png"
import Responsive6 from "../../assets/Proyecto_responsive/sandalias_select.png"
import Responsive7 from "../../assets/Proyecto_responsive/sandalias.png"
import Responsive8 from "../../assets/Proyecto_responsive/sandlias_boton.png"

const ProyectResponsive = () =>{
    var image =[Responsive1, Responsive2, Responsive3, Responsive4, Responsive5, Responsive6, Responsive7, Responsive8]
    
    return(
        <ul className="lista_proyectos hidden" id="proyect_responsive">
            {image.map((imagen, index)=>(
                <li key={index} className="proyect proyect_responsive">
                    <img src={imagen} className=" img_proyect_cel" alt={`Imagen ${index+1}`} />
                </li>
          ))}
        </ul>

    )
}

export default ProyectResponsive
