import React from "react";
import { useState } from "react";
import './service.css'

const Service = () => {
    return(
        <section className="container section service" id="contact">
            <fieldset className="fieldset_about fieldset_service">
                <legend className="legend_title">Contact</legend>
                <div className="container_item container_item_service">
                    <div className="items-separate_cel">
                        <a href="mailto:petjosevera@gmail.com" className="contact_service">
                            <i class="fa-regular fa-envelope"></i>
                            <p className="p_contact">petjosevera@gmail.com</p>
            
                        </a>
                        <a href="https://www.linkedin.com/in/pjvc/" className="contact_service">
                            <i class="fa-brands fa-github"></i>
                            <p className="p_contact">github.com/pjvc</p>
                        </a>
                    </div>
                    <div className="items-separate_cel">
                        <a href="https://github.com/pjvc"className="contact_service">
                            
                            <i class="fa-brands fa-linkedin"></i>
                            <p className="p_contact">linkedin.com/in/pjvc/</p>
                        </a>
                        <a href="https://wa.me/593995060558"  className="contact_service">
                            <i class="fa-brands fa-whatsapp"></i>
                            <p className="p_contact">+593 99 506 0558</p>
                        </a>
                    </div>
                </div>
            </fieldset>
            <div className="footer"></div>
        </section>
    )
}

export default Service