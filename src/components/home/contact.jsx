import React from "react";
const Contact = () =>{
    return(
        <div className="home_social">
            <a href="https://github.com/pjvc" className="link_contact">
                <i class="fa-brands fa-github item-contact"></i>
            </a>

            <a href="https://www.linkedin.com/in/pjvc/" className="link_contact">
                <i class="fa-brands fa-linkedin item-contact"></i>
            </a>
            <a href="mailto:petjosevera@gmail.com" className="link_contact">
                <i class="fa-regular fa-envelope item-contact"></i>            
            </a>
        </div>
    )
}
export default Contact