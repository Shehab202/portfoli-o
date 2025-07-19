import "./about.css";
import pg2 from "../../assets/ea2ba424-08d3-4afd-80cf-495629201acc.jpeg";
import gsap from "gsap";
import { useEffect, useRef } from "react";
function About() {
  const containerRef = useRef(null);
  const x = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        x: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    const ele = x.current;
    gsap.fromTo(
      ele,
      { opacity: 0, x: -50 },
      {
        x: 0,
        duration: 4,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ele,
        },
      }
    );
  }, []);
  return (
    <div>
      <div className="about" id="about">
        <div className="component">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
        <div className="container">
          <div className="content">
            <div className="imge" ref={x}>
              <img src={pg2} alt="" />
            </div>
            <div className="text" ref={containerRef}>
              <h2>Shehab Hussein</h2>
              <p>
                I&apos;m a <span>Frontend Developer</span> and{" "}
                <span>React Native Mobile Developer</span> based in{" "}
                <span>Egypt</span>, with a relentless drive for excellence. I
                build and maintain functional, responsive <span>web</span> and{" "}
                <span>mobile applications</span> using both{" "}
                <strong>React Native CLI</strong> and <strong>Expo</strong>.
                Proficient in the latest <span>technologies</span> and
                frameworks, I constantly expand my skill set to stay at the
                forefront of the industry.
              </p>

              <a
                className="btn btn-primary"
                href="https://api.whatsapp.com/send/?phone=201145082201&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                lets talk
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default About;
