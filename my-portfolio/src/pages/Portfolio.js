import React from "react";
import ProjectCards from "../components/ProjectCards";
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    id: 1,
    name: "TheGoods",
    image: "./assets/images/TheGoods.png",
    github: "https://github.com/Pasgen-Manley/TheGoods",
    deploy: "https://morning-ravine-85802.herokuapp.com/",
    topics: "Node.JS, Sequelize, Handlebars, Express.js, MySQL, MVC, dotenv, Gulp"
  },
  {
    id: 2,
    name: "SongStar",
    image: "./assets/images/SongStar.png",
    github: "https://github.com/scottyv6/SongStar",
    deploy: "https://scottyv6.github.io/SongStar/",
    topics: "JS, Bulma, jQuery"
  },
  {
    id: 3,
    name: "AnytimeBudget",
    image: "./assets/images/budget1.png",
    github: "https://github.com/Pasgen-Manley/Anytime-Budget",
    deploy: "https://floating-cove-02210.herokuapp.com/",
    topics: "JS, Mongoose, PWA, Express, Node.js"
  },
  {
    id: 4,
    name: "Fitness Tracker",
    image: "./assets/images/fitness-tracker.png",
    github: "https://github.com/Pasgen-Manley/Workout-Tracker",
    deploy: " https://stormy-plateau-47635.herokuapp.com/",
    topics: "JS, Mongoose, PWA, Express, Node.js"
  },
  {
    id: 5,
    name: "Tech Blog",
    image: "./assets/images/tech-blog.png",
    github: "https://github.com/Pasgen-Manley/Tech-Blog",
    deploy: "https://pure-plains-74715.herokuapp.com/login",
    topics: "JS, Sequalize, HandleBars, Express, MySQL, Dotenv, Node.js"
  },
  {
    id: 6,
    name: "Note Taker",
    image: "./assets/images/note-taker.png",
    github: "https://github.com/Pasgen-Manley/Note-Taker-Write-and-Save-Notes",
    deploy: "https://shrouded-shore-32119.herokuapp.com/",
    topics: "JS, Sequalize, Express, MySQL, Dotenv, Node.js"
  }
];

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

  return (
      <section className="container">
        <div className="project">
          <h2 className="top-title">Bootcamp Portfolio</h2>
          <hr></hr>
        </div>

        <Wrapper id="card-data">
          {projects.map((project) => (
            <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
          ))}
        </Wrapper>
      </section>
  
  );
}

export default Portfolio;