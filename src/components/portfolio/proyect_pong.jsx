
import React from "react"
import Pong1 from '../../assets/Proyecto_pong/gol_jugador.png'
import Pong2 from '../../assets/Proyecto_pong/Inicio.png'
import Pong3 from '../../assets/Proyecto_pong/jugador_1_win.png'
import Pong4 from '../../assets/Proyecto_pong/Pong_1vs1.png'

var images = [{Pong1}, {Pong2}, {Pong3}, {Pong4} ]
    
let creation = images.map(elemento => {
    var lista = document.createElement('li')
    lista.innerHTML += `<img scr=${(Object.values(elemento))[0]}/>`
    console.log(lista)
    return lista;
})


const ProyectoPong  = () =>{
    return (
        <div id="principal">
            <div id="elemento"></div>
        </div>
    )

}

var nose = document.querySelector('#elemento')
console.log(nose)



export default ProyectoPong