import { IoHome } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("#");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomThreshold = 100;

      if (
        scrollY > 100 &&
        scrollY + windowHeight < documentHeight - bottomThreshold
      ) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="navbar-container"
      style={{
        transition: "opacity 0.8s ease",
        display: showNavbar ? "block" : "none",

      }}
    >
      <nav>
        <ul>
          <li
            className={active === "#" ? "active" : ""}
            onClick={() => setActive("#")}
          >
            <a href="#home">
              <IoHome />
            </a>
          </li>
          <li
            className={active === "#project" ? "active" : ""}
            onClick={() => setActive("#project")}
          >
            <a href="#project">
              <LuUserCheck />
            </a>
          </li>
          <li
            className={active === "#services" ? "active" : ""}
            onClick={() => setActive("#services")}
          >
            <a href="#services">
              <BiBook />
            </a>
          </li>
          <li
            className={active === "#skills" ? "active" : ""}
            onClick={() => setActive("#skills")}
          >
            <a href="#skills">
              <RiServiceLine />
            </a>
          </li>
          <li
            className={active === "#contant" ? "active" : ""}
            onClick={() => setActive("#contant")}
          >
            <a href="#contant">
              <BiMessageSquareDetail />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
