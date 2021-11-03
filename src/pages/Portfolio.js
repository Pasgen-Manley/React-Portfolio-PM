import React from "react";
import ProjectCards from "../components/ProjectCards";
import 'bootstrap/dist/css/bootstrap.min.css';
import TheGoods from "../assets/images/TheGoods.png";
import SongStar from "../assets/images/SongStar.png";
import AnytimeBudget from "../assets/images/budget1.png";
import Fitness from "../assets/images/fitness-tracker.png";
import TechBlog from "../assets/images/tech-blog.png";
import NoteTaker from "../assets/images/note-taker.png";

const projects = [
  {
    id: 1,
    name: "TheGoods",
    image: TheGoods,
    github: "https://github.com/Pasgen-Manley/TheGoods",
    deploy: "https://morning-ravine-85802.herokuapp.com/",
    topics: "Node.JS, Sequelize, Handlebars, Express.js, MySQL, MVC, dotenv, Gulp"
  },
  {
    id: 2,
    name: "SongStar",
    image: SongStar,
    github: "https://github.com/scottyv6/SongStar",
    deploy: "https://scottyv6.github.io/SongStar/",
    topics: "JS, Bulma, jQuery"
  },
  {
    id: 3,
    name: "AnytimeBudget",
    image: AnytimeBudget,
    github: "https://github.com/Pasgen-Manley/Anytime-Budget",
    deploy: "https://floating-cove-02210.herokuapp.com/",
    topics: "JS, Mongoose, PWA, Express, Node.js"
  },
  {
    id: 4,
    name: "Fitness Tracker",
    image: Fitness,
    github: "https://github.com/Pasgen-Manley/Workout-Tracker",
    deploy: " https://stormy-plateau-47635.herokuapp.com/",
    topics: "JS, Mongoose, PWA, Express, Node.js"
  },
  {
    id: 5,
    name: "Tech Blog",
    image: TechBlog,
    github: "https://github.com/Pasgen-Manley/Tech-Blog",
    deploy: "https://pure-plains-74715.herokuapp.com/login",
    topics: "JS, Sequalize, HandleBars, Express, MySQL, Dotenv, Node.js"
  },
  {
    id: 6,
    name: "Note Taker",
    image: NoteTaker,
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