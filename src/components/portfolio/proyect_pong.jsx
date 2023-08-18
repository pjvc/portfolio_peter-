
import React from "react"
import Pong1 from '../../assets/Proyecto_pong/gol_jugador.png'
import Pong2 from '../../assets/Proyecto_pong/Inicio.png'
import Pong3 from '../../assets/Proyecto_pong/jugador_1_win.png'
import Pong4 from '../../assets/Proyecto_pong/Pong_1vs1.png'

/*let creation = images.map(elemento => {
    var lista = document.createElement('li')
    lista.innerHTML += `<img scr=${(Object.values(elemento))[0]}/>`
    lista.classList.add("proyect")
    console.log(lista)
    
    return lista;
})*/


const ProyectoPong  = () =>{
    var images = [Pong1, Pong2, Pong3, Pong4 ]

    
    return (
        <div id="proyect_pong" className="container_proyects hidden">
          <div className="proyect-title">
            <h2>VideoGame Pong in C++</h2>
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

export default ProyectoPong