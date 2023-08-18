
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
        </aside>
    )
}
export default SideBar;
