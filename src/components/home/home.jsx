import React from "react";
import './home.css'
import peter from '../../assets/peter.png'
import Contact from "./contact";
import ScrollDown from "./scrolldown";

const Home = () =>{
    return(
        <section className="home container" id="home">
            <div className="intro">
                <div className="div_img">
                    <img src={peter} alt="" className="img_user" />
                </div>
                <h2 className="home_name">Peter Vera</h2>
                <p>I'm a Software Developer</p>
                <Contact/>
                <a href="#contact" className="btn">Hire me</a>
                <ScrollDown/>
            </div>

        </section>
    )
}
export default Home