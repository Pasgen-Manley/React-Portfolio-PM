import React from "react";
import MyImage from "../assets/me.JPG"

function About() {
   return(
     <section className="container">
       <h2 className="top-title">Pasgen Manley</h2>
       <hr></hr>
       <div>
         <img className="mb-5" id="avatar" src={MyImage} alt="Pasgen Manley with Snowboard" />

        <p>
         I am a student full-stack web developer. Currently undergoing the University of Western Australia web developer Bootcamp. 
         I have a keen interest in web development and design. I especially like to work with minimalist styles and surreal otherworldly colors. 
         My additional skills are in video editing and video production flow in davinci resolve.
        </p>
       </div>
     </section>
   );
}

export default About;