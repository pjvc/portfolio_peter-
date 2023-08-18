import React, { createRef } from "react";
import Capture from "../../assets/Proyecto_tienda/Capture.png"
import './portfolio.css'
import ProyectoPong from "./proyect_pong.jsx"
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
import Sistem from "./proyect_sistem";
import ProyectResponsive from "./portfolio_responsive";
const Portfolio = () => {
    var images_select = document.querySelectorAll('img.img_proyect')
    const overlay = document.getElementById('overlay');
    var overlay_image = document.getElementById('overlay_image')
    images_select.forEach(images  =>{
       images.addEventListener('click', ()=>{
            overlay_image.src = images.src;
            overlay.style.opacity = 1;
            overlay.style.pointerEvents = 'auto';
        })
    })
    return(
        <section className="container section proyects" id="portfolio">
            <fieldset className="fieldset_proyects">
                <legend className="legend_title title_proyect">Proyects</legend>
                <div className="slider">  
                    <div className="container_proyects" id="proyect_sales">
                        <div className="proyect-title">
                            <h2>Virtual Shop with HTML, CSS and JAVASCRIPT</h2>
                            <div className="design design_select" id="desktop" onClick={function painter(){
                                var desktop = document.querySelector('div#desktop')
                                var responsive = document.querySelector('div#responsive')
                                var project_desktop = document.querySelector('ul#project_desktop')
                                var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                elementoResponsive.classList.add('hidden')
                                project_desktop.classList.remove('hidden')
                                desktop.classList.add('design_select')
                                responsive.classList.remove('design_select')
                                }}>Desktop Design</div>
                            <div className="design" id="responsive" onClick={function painter(){
                                var desktop = document.querySelector('div#desktop')
                                var responsive = document.querySelector('div#responsive')
                                var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                elementoResponsive.classList.remove('hidden')
                                var project_desktop = document.querySelector('ul#project_desktop')
                                project_desktop.classList.add('hidden')
                                desktop.classList.remove('design_select')
                                responsive.classList.add('design_select')
                                }}>Responsive Design</div>
                        </div>
                        <ul className="lista_proyectos" id="project_desktop">
                        <li className="proyect">
                            <img src={Capture} alt="100" className="img_proyect"/>
                        </li>
                        <li className="proyect">
                            <img src={Proyecto_1} alt="100" className="img_proyect"/>
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
                        
                        <ProyectResponsive/>

                        <div className="div_visit">
                            <a href="https://pjvc.github.io/SANDALIAS/" className="visit">Visit website</a>
                        </div>
                    </div>
                    <ProyectoPong />
                    <Sistem/> 
                    <div className="container_select_proyect">
                            <div className="select_proyect select" id="select_sales" 
                                onClick={function ocultar(){
                                    var proyect_sales = document.querySelector('div#proyect_sales')
                                    var proyect_pong  = document.querySelector('div#proyect_pong')
                                    var proyect_sistem = document.querySelector('div#proyect_sistem')
                                    proyect_sistem.classList.add('hidden')
                                    proyect_sales.classList.remove('hidden')
                                    proyect_pong.classList.add('hidden')
                                    var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                    elementoResponsive.classList.add('hidden')
                                    
                                    var select_sales = document.querySelector('div#select_sales')
                                    var select_pong = document.querySelector('div#select_pong')
                                    var select_sistem = document.querySelector('div#select_sistem')
                                    select_sales.classList.add('select')
                                    select_pong.classList.remove('select')
                                    select_sistem.classList.remove('select')

                                    var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                    elementoResponsive.classList.add('hidden')

                                    var desktop = document.querySelector('div#desktop')
                                    desktop.classList.add('design_select')

                                    var responsive = document.querySelector('div#responsive')
                                    responsive.classList.remove('design_select')

                                    var project_desktop = document.querySelector('ul#project_desktop')
                                    project_desktop.classList.remove('hidden')
                                    
                            }}>
                                <ul className="lista_select_proyect ">
                                    <li className="lista_img">
                                        <img src={Capture} className="img_select" alt="" />
                                    </li>
                                    <li className="title_project">E comerce</li>
                                </ul>
                            </div>
                            <div className="select_proyect" id="select_pong" onClick={function ocultar(){
                                var proyect_sales = document.querySelector('div#proyect_sales')
                                var proyect_pong  = document.querySelector('div#proyect_pong')
                                var proyect_sistem = document.querySelector('div#proyect_sistem')
                                var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                elementoResponsive.classList.add('hidden')
                                proyect_sistem.classList.add('hidden')
                                proyect_sales.classList.add('hidden')
                                proyect_pong.classList.remove('hidden')
                                var select_sales = document.querySelector('div#select_sales')
                                var select_pong = document.querySelector('div#select_pong')
                                var select_sistem = document.querySelector('div#select_sistem')
                                select_sales.classList.remove('select')
                                select_pong.classList.add('select')
                                select_sistem.classList.remove('select')

                                var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                elementoResponsive.classList.add('hidden')
                            }}>
                                <ul className="lista_select_proyect">
                                    <li className="lista_img">
                                        <img src={Inicio} className="img_select" alt="" />
                                    </li>
                                    <li className="title_project">VideoGame Pong with C++</li>
                                </ul>
                            </div>
                            <div className="select_proyect" id="select_sistem" onClick={function ocultar(){
                                var proyect_sales = document.querySelector('div#proyect_sales')
                                var proyect_pong  = document.querySelector('div#proyect_pong')
                                var select_sales = document.querySelector('div#select_sales')
                                var select_pong = document.querySelector('div#select_pong')
                                var proyect_sistem = document.querySelector('div#proyect_sistem')
                                var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                elementoResponsive.classList.add('hidden')
                                proyect_sistem.classList.remove('hidden')
                                proyect_sales.classList.add('hidden')
                                proyect_pong.classList.add('hidden')
                                var select_sistem = document.querySelector('div#select_sistem')
                                select_sales.classList.remove('select')
                                select_pong.classList.remove('select')
                                select_sistem.classList.add('select')

                                var elementoResponsive = document.querySelector('ul#proyect_responsive')
                                elementoResponsive.classList.add('hidden')
                            }} >
                                <ul className="lista_select_proyect">
                                    <li className="lista_img">
                                        <img src={Sesion} className="img_select" alt="" />
                                    </li>
                                    <li className="title_project">Sales interface in HTML CSS and JAVASCRIPT</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    
                    
                    
                    
                </div>
                <div className="overlay" id="overlay" onClick={function hidden_overlay(){
                    var overlay = document.getElementById('overlay')
                    overlay.style.opacity = 0;
                    overlay.style.pointerEvents = 'none';
                }}>
                    <img  alt="" className="overlay_image" id="overlay_image" />
                </div>  
            </fieldset>            
        </section>
        
    )
}

export default Portfolio