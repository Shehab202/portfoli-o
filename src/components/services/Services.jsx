import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

import "./services.css";
function Services() {
  return (
    <div>
      <div className="services" id="services">
        <div className="component">
          <h5>What services I Have</h5>
          <h2>My services</h2>
        </div>

        <div className="container">
          <motion.div className="box">
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{once:true}}
              transition={{
                duration: 5,
                type: "spring",
                ease: "easeInOut",
                delay: 0.3,
                stiffness:100
              }}
            >
              <h1>
                <MdDesignServices />
              </h1>
              <div className="text">
                <h4>Web Design</h4>
                <p>
                  Help you build a strong online presence by designing
                  customized websites that meet your needs and exceed your
                  expectations
                </p>
              </div>
            </motion.div>

            <motion.div
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
               
                type: "spring",
                ease: "easeInOut",
                delay: 0.3,
                stiffness: 50,
                duration: 5,
              }}
            >
              <h1>
                <IoIosRocket />
              </h1>
              <div className="text">
                <h4>Fast Performance</h4>
                <p>
                  I provide fast performance to ensure the best possible
                  experience
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{once:true}}
              transition={{
                duration: 5,
                type: "spring",
                ease: "easeInOut",
                delay: 0.3,
                stiffness:100
              }}
            >
              <h1>
                <FaCode />
              </h1>
              <div className="text">
                <h4>Clean Code</h4>
                <p>
                  I provide you with clean and clear code to ensure easy
                  maintenance and long-term development
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
