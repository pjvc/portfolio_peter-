import React from "react";
import Capture from "../../assets/Proyecto_tienda/Capture.png"
import './portfolio.css'
import Proyecto_1 from "../../assets/Proyecto_tienda/proyecto-tienda_1.png"
import Proyecto_2 from "../../assets/Proyecto_tienda/proyecto-tienda-anuncio.png"
import Proyecto_3 from "../../assets/Proyecto_tienda/proyecto_tienda_escolar.png"
import Proyecto_4 from "../../assets/Proyecto_tienda/proyecto_tienda_2.png"
import Proyecto_5 from "../../assets/Proyecto_tienda/Proyecto_sandalia.png"
import Proyecto_6 from "../../assets/Proyecto_tienda/Proyecto_plataforma.png"
import Proyecto_7 from "../../assets/Proyecto_tienda/Proyecto_Tacones.png"
import Proyecto_8 from "../../assets/Proyecto_tienda/Proyecto_comprar.png"
import Inicio from "../../assets/Proyecto_pong/Inicio.png"
import Sesion from "../../assets/Sales/Sesion.png"
import ProyectoPong from "./proyect_pong"
const Portfolio = () => {
    return(
        <section className="container section proyects">
            <fieldset className="fieldset_proyects">
                <legend className="legend_title title_proyect">Proyects</legend>
                <div className="slider">  
                    <div className="container_proyects">
                        <div className="proyect-title">
                            <h2>Virtual Shop with HTML, CSS and JAVASCRIPT</h2>
                            <div className="design">Desktop Design</div>
                            <div className="design">Responsive Design</div>
                        </div>
                        <ul className="lista_proyectos">
                        <li className="proyect">
                            <img src={Capture} alt="100" className="img_proyect" />
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_1} alt="100" className="img_proyect" />
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_2} alt="" className="img_proyect"/>
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_3} alt="" className="img_proyect" />
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_4} alt="" className="img_proyect" />
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_5} alt="" className="img_proyect"/>
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_6} alt="" className="img_proyect" />
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_7} alt="" className="img_proyect" />
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_8} alt="" className="img_proyect" />
                        </li>
                        
                        </ul>
                        <div className="div_visit">
                            <a href="https://pjvc.github.io/SANDALIAS/" className="visit">Visit website</a>
                        </div>
                        <div className="container_select_proyect">
                            <div className="select_proyect">
                                <ul className="lista_select_proyect">
                                    <li className="lista_img">
                                        <img src={Inicio} className="img_select" alt="" />
                                    </li>
                                    <li>Videogame Pong in C++</li>
                                </ul>
                            </div>
                            <div className="select_proyect">
                                <ul className="lista_select_proyect">
                                    <li className="lista_img">
                                        <img src={Sesion} className="img_select" alt="" />
                                    </li>
                                    <li>Sales interface in HTML CSS and JAVASCRIPT</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    
                </div>  
            </fieldset>
            <ProyectoPong/>
        </section>
    )
}
 
export default Portfolio