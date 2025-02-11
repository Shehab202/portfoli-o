import "./projects.css";
import project1 from "../../assets/portfolio1.jpg.png";
import project2 from "../../assets/book stor.webp";
import project3 from "../../assets/bondi.png";
import project4 from "../../assets/crud.png";
import project5 from "../../../src/assets/ecomm.png";
import project6 from "../../assets/portfolio6.jpg";
import htmlIcon from "../../assets/html-1.svg";
import cssIcon from "../../assets/css-3 (1).svg";
import javascriptIcon from "../../assets/logo-javascript.svg";
import reactIcon from "../../assets/react-icons.svg";
import jsonserver from "../../assets/json-server-use-cases.b90494c0.png";
import twelements from "../../assets/te-transparent-noshadows.webp";
import tailwindIcon from "../../assets/tailwind-css-2.svg";
import axios from "../../assets/axios.svg";
import hot from "../../assets/download (1).png";
import reactsvg from "../../assets/react-2.svg";
import reduxIcon from "../../assets/redux.svg";
import bootstrapIcon from "../../assets/bootstrap-5-1.svg";

import framer from "../../assets/framer-motion.svg";
import router from "../../assets/Dark (1).svg";
import sweetalert from "../../assets/download (2).png";
import { motion } from "framer-motion";

const allProject = [
  {
    id: 5,
    img: project5,
    title: "e-Commerce",
    github: "kk",
    demo: "https://github.com/Shehab202/Hala_e-commerce",
    technologies: [reactsvg, reduxIcon, hot, router, axios, twelements],
  },

  {
    id: 1,
    img: project2,
    title: "Book-Store",
    github: "kk",
    demo: "https://delightful-tapioca-7a0a8e.netlify.app/",
    technologies: [reactsvg, reactIcon, reduxIcon, router],
  },
  {
    id: 4,
    img: project4,
    title: "CRUD System",
    github: "kk",
    demo: "https://shehab202.github.io/crud/",
    technologies: [htmlIcon, cssIcon, javascriptIcon, sweetalert],
  },

  {
    id: 2,
    img: project1,
    title: "Shane",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
    technologies: [htmlIcon, cssIcon, javascriptIcon],
  },

  {
    id: 3,
    img: project3,
    title: "Bondi",
    github: "kk",
    demo: "https://shehab202.github.io/bondi/",
    technologies: [bootstrapIcon, htmlIcon],
  },
];

function Projects() {
  return (
    <div>
      <div className="project" id="project">
        <div className="component">
          <h5>What Project I Have</h5>
          <h2>Some Project</h2>
        </div>
        <div className="container">
          <div className="box">
            {allProject.map((e) => (
              <motion.div
                key={e.id}
                className="card"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 5,
                  type: "spring",
                  ease: "easeInOut",
                  delay: 0.3,
                  stiffness: 50,
                }}
              >
                <div className="imag">
                  <img src={e.img} alt="" />
                </div>
                <div className="text">
                  <h4>{e.title}</h4>
                  <div className="technologyIcon">
                    {e.technologies.map((e, index) => (
                      <div className="border" key={index}>
                        <img src={e} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div className="demo" whileTap={{ scale: 0.9 }}>
                  <a href={e.demo} target="_blank">
                    View Demo
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
