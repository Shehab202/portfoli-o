import "./home.css";
import png from "../../assets/31a6af58-0274-4626-8122-baa042d160fa.jpeg";
import cv from "../../assets/Shehab Hussein ,cv.pdf.pdf";
import Social from "./Social";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";

function Home() {
  const one = useRef(null);
  const two = useRef(null);

  useEffect(() => {
    const el = one.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: -100 },
      {
        y: 0,
        duration: 5,
        opacity: 1,
        ease: "power4.out",
        delay: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    const ela = two.current;
    gsap.fromTo(
      ela,
      { opacity: 0, y: 50 },
      {
        y: 0,
        duration: 5,
        delay: 1,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ela,
        },
      }
    );
  }, []);

  return (
    <div className="home" id="home">
      <div className="container home-content" ref={one}>
        <h3>Hello I`m</h3>
        <h1>Sehab Hussein</h1>
        <div className="rr">
          <motion.h4
            className="text-light"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 120, repeat: Infinity, delay:1.5 ,ease:"linear"}}
          >
            A Frontend Developer A Frontend Developer A Frontend Developer A
            Frontend Developer A Frontend Developer A Frontend Developer A
            Frontend Developer A Frontend Developer A Frontend Developer A
            Frontend Developer A Frontend Developer A Frontend Developer A
            Frontend Developer A Frontend Developer A Frontend Developer A
            Frontend Developer A Frontend Developer Frontend Developer A Frontend Developer
          </motion.h4>
        </div>
        <div className="btns">
          <a className="btn" href={cv} download>
            Download CV
          </a>

          <a
            className="btn btn-primary"
            href="https://api.whatsapp.com/send/?phone=201145082201&text&type=phone_number&app_absent=0"
          >
            lets talk
          </a>
        </div>
        <div className="image" ref={two}>
          <img src={png} alt="" />
        </div>
        <Social />
      </div>
    </div>
  );
}

export default Home;
