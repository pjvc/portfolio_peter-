import React from "react";
import './about.css'
const About = () =>{
    return(
        <section className="about container section" id="about">
            <fieldset className="fieldset_about">
                <legend className="legend_title">About me</legend>
                <p>Technology enthusiast, in training to contribute to its advancement, development and continuous improvement. 
                    Learning to write my life with code. Focused on programming ❤️‍🔥. With a science background . Developing Computational Thinking ⚙️.</p>
                <a href="" className="btn cv">Dowload CV</a>
            </fieldset>
            <fieldset className="fieldset_about">
                <legend className="legend_title">Skills</legend>
                <div className="container_item">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-react"></i>
                </div>
                
                

            </fieldset>
            
        </section>
       
    )
}
export default About;