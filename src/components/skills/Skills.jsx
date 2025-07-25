import "./skills.css";
import htmlIcon from "../../assets/html-2.svg";
import cssIcon from "../../assets/css-3 (1).svg";
import javascriptIcon from "../../assets/logo-javascript.svg";
import bootstrapIcon from "../../assets/bootstrap-5-1.svg";
import tailwindIcon from "../../assets/tailwind-css-2.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github-icon-1.svg";
import reactIcon from "../../assets/react-2.svg";
import reduxIcon from "../../assets/redux.svg";
import framer from "../../assets/framer-motion.svg";
import typescriptIcon from "../../assets/typescript-2.svg";
import router from "../../assets/Dark (1).svg";
import axios from "../../assets/axios.svg";
import vite from "../../assets/Vitejs-logo.svg.png";
import nextIcon from "../../assets/dango-inner-2.webp";
import reactNativeIcon from "../../assets/react-native-1.svg";
import reactNavigationIcon from "../../assets/react-navigation.webp";
import expoIcon from "../../assets/expo-1.svg";
import reactHookForm from "../../assets/download (4).png";
import zod from "../../assets/logo-glow.png";

import { motion } from "framer-motion";
const skills = [
  {
    id: 1,
    icon: htmlIcon,
    title: "HTML",
    description:
      "Skilled in creating structured and semantic web pages using HTML5.",
    ref: "containerRef",
  },
  {
    id: 2,
    icon: cssIcon,
    title: "CSS",
    description:
      "Proficient in crafting responsive designs with CSS3 and Bootstrap 5.",
  },
  {
    id: 3,
    icon: javascriptIcon,
    title: "JavaScript",
    description:
      "Experienced in building interactive web features using JavaScript",
  },

  {
    id: 9,
    icon: typescriptIcon,
    title: "TypeScript",
    description:
      "Specialized in writing scalable and maintainable code with TypeScript.",
  },
  {
    id: 7,
    icon: reactIcon,
    title: "React",
    description:
      "Experienced in building dynamic user interfaces and managing state efficiently with React.",
  },
  
  {
    id: 15,
    icon: nextIcon,
    title: "Next",
    description:
      "Familiar with building web applications using Next.js, including basic routing, API routes, and server-side rendering",
  }
,
  {
    id: 17,
    icon: reactNativeIcon,
    title: "React Native",
    description:
    "Build cross-platform mobile apps using both React Native CLI and Expo. Experienced in UI design, state management, navigation, authentication, and integration with real APIs.",
  },
  {
  id: 19,
  icon: expoIcon,
  title: "Expo",
  description:
    "Experienced in using Expo to rapidly build and test cross-platform mobile applications with React Native.",
}
,
{
  id: 20,
  icon: reactNavigationIcon,
  title: "React Navigation",
  description:
    "Proficient in implementing stack, tab, and drawer navigation in React Native apps using React Navigation.",
}
,
  {
    id: 8,
    icon: reduxIcon,
    title: "Redux",
    description:
      "Skilled in implementing state management solutions with Redux for scalable applications.",
  },
  {
    id: 10,
    icon: bootstrapIcon,
    title: "Bootstrap",
    description:
      "Expert in designing responsive, mobile-first websites with Bootstrap.",
  },
  {
    id: 4,
    icon: tailwindIcon,
    title: "Tailwind CSS",
    description:
      "Experienced in designing modern and responsive interfaces using Tailwind CSS for various projects.",
  },
  {
    id: 5,
    icon: gitIcon,
    title: "Git",
    description:
      "Proficient in version control and collaborative workflows using Git.",
  },
  {
    id: 6,
    icon: githubIcon,
    title: "Github",
    description:
      "Skilled in managing repositories and collaborating on projects through GitHub.",
  },

  {
    id: 11,
    icon: framer,
    title: "Framer-Fotion",
    description: "I've worked with Framer-Fotion for a few projects.",
  },
  {
    id: 13,
    icon: router,
    title: "React-Router",
    description:
      "I develop interactive web applications using React Router to manage navigation between pages seamlessly.",
  },
  {
    id: 14,
    icon: axios,
    title: "Axios",
    description:
      "I'm developing a web application that requires communication with a backend server, and I used Axios to efficiently manage HTTP requests (GET, POST, PUT, DELETE).",
  },
  {
    id: 18,
    icon: reactHookForm,
    title: "React Hook Form",
    description:
      "I used React Hook Form to build performant and scalable forms with minimal re-renders and built-in validation handling.",
  },
  {
    id: 15,
    icon: zod,
    title: "Zod",
    description:
      "I used Zod to define and validate form schemas with TypeScript-friendly syntax, ensuring clean and safe data handling.",
  },
  {
    id: 16,
    icon: vite,
    title: "vite",
    description: "Use Vite for high performance and speed of development.",
  },
];

function Skills() {
  return (
    <div>
      <div className="skills" id="skills">
        <div className="component">
          <h5>What Skills I Have</h5>
          <h2>My Skills</h2>
        </div>
        <div className="container">
          <div className="box">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="skill"
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
                  type: "spring",
                  ease: "easeInOut",
                  delay: 0.2,
                  stiffness: 50,
                  duration: 5,
                }}
              >
                <div className="imag">
                  <img src={skill.icon} alt={skill.title} />
                </div>
                <div className="text">
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
