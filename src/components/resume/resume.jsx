import React from "react";
import './resume.css'
const Resume = () =>{
    return(
        <section className="container section resume">
            <fieldset className="fieldset_resume">
                <legend className="legend_title">Details</legend>
                <fieldset className="fieldset_contenido">
                    <legend className="legend_content">Personal Info</legend>
                    <p>Name: Peter Jose Vera Contreras</p>
                    <p>Age: 20 years old</p>
                    <p>Nationality: Ecuadorian</p>
                </fieldset>
                <fieldset className="fieldset_contenido">
                    <legend className="legend_content">Study</legend>
                    <h3>Technological</h3>
                    <p>Argos University Technological</p>
                    <p>Career: Software Developer (Feb 20-Now)</p>
                    <p>Status: In progress</p>
                </fieldset>
            </fieldset>
        </section>
    )
}

export default Resume;