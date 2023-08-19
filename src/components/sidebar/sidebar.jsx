
import React from "react";
import './sidebar.css'
import programador from '../../assets/programador.png'
import { useState } from "react";
const SideBar = () => {
    
    return(
        <aside className="aside">
            <div className="section_aside">     
                <a href="#home" className="navlogo">
                    <img src={programador} alt="" />
                </a>
                <nav className="nav">
                    <div className="div_nav">
                        <ul className="nav_list">
                            <a className="item_link" href="#home">
                                <li className="items">Home</li>
                                <i className="icon-home"></i>
                            </a>
                            <a className="item_link" href="#about">
                                <li className="items">About Me</li>
                                <i className="icon-user-following"></i>
                            </a>
                            <a className="item_link" href="#resume">    
                                <li className="items">Resume</li>
                                <i className="icon-graduation"></i>
                            </a>
                            <a className="item_link" href="#portfolio">
                                <li className="items">Portfolio</li>
                                <i className="icon-briefcase"></i>
                            </a>
                            <a className="item_link" href="#contact">
                                <li className="items">Contact</li>
                                <i className="icon-phone"></i>
                            </a>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="section_aside_cel" >
                <div className="continer_button_menu">
                    <i className="fa-solid fa-bars icon_menu" id="menu_cel" onClick={function showMenu(){
                        var select_menu_cel = document.getElementById('select_menu_cel')
                        select_menu_cel.style.opacity = 1;
                        select_menu_cel.style.pointerEvents= 'auto'
                    }}></i>
                </div>
                <div className="select_menu_cel" id="select_menu_cel" onClick={function showMenu(){
                        var select_menu_cel = document.getElementById('select_menu_cel')
                        select_menu_cel.style.opacity = 0;
                        select_menu_cel.style.pointerEvents= 'none'
                    }}>
                    <div className="nav_list_cel">
                        <ul className="list_cel">
                            <a href="#home" className="item_list_cel">
                                <p className="items_cel" href="#home">Home</p>
                                <i className="icon-home"></i>
                            </a>
                            <a href="#about" className="item_list_cel" >
                                <li className="items_cel">About Me</li>
                                <i className="icon-user-following"></i>
                            </a>
                            <a href="#resume" className="item_list_cel">
                                <li className="items_cel">Resume</li>
                                <i className="icon-graduation"></i>
                            </a>
                            <a href="#portfolio" className="item_list_cel">
                                <li className="items_cel">Portfolio</li>
                                <i className="icon-briefcase"></i>
                            </a>
                            <a href="#contact" className="item_list_cel">
                                <li className="items">Contact</li>
                                <i className="icon-phone"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default SideBar;
