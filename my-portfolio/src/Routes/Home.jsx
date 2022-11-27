import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //  window.onscroll(()=>{
  //     console.log(window.scrollY)
  //  })
  const [active, setActive] = useState("Home");
  const [navbg, setNavbg] = useState(true);
  const [navname, setNavname] = useState(true);
  const [laptop, setlaptop] = useState(true);
  const [ipad, setIpad] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    // const position = window.pageYOffset;

    const scrool = window.scrollY;
    // console.log(scrool);
    if (scrool >= 0 && scrool < 720) {
      setActive("Home");
      setNavbg(true);
      setNavname(true);
    } else if (scrool >= 720 && scrool < 1440) {
      setActive("about");
      setNavbg(false);
      setNavname(false);
    } else if (scrool >= 1440 && scrool < 2160) {
      setActive("project");
      setNavbg(false);
      setNavname(false);
    } else if (scrool >= 2160 && scrool < 2880) {
      setActive("contact");
      setNavbg(false);
      setNavname(false);
    }
    // setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#" className={active == "Home" ? "active1" : "none"}>
          Home
        </a>
        <a href="#about" className={active == "about" ? "active1" : "none"}>
          About
        </a>
        <a href="#" className={active == "resume" ? "active1" : "none"}>
          Resume
        </a>
        <a href="#project" className={active == "project" ? "active1" : "none"}>
          Projects
        </a>
        <a href="#contact" className={active == "contact" ? "active1" : "none"}>
          Contact
        </a>
      </div>
      <div
        style={{ position: "fixed" }}
        className={navbg == true ? "navbar1" : "navbar_bg_change"}
      >
        <div className={navname == true ? "name_nav" : "name_nav1"}>
          <span
            style={{ fontSize: "30px", cursor: "pointer", marginRight: "20px" }}
            onClick={openNav}
          >
            &#9776;
          </span>
          <p>
            <span>A</span>nkit <span>P</span>atil
          </p>
        </div>

        <div className="navigation">
          <a href="#" className={active == "Home" ? "active" : "none"}>
            Home
          </a>
          <a href="#about" className={active == "about" ? "active" : "none"}>
            About
          </a>
          <a href="#resume" className={active == "resume" ? "active" : "none"}>
            Resume
          </a>
          <a
            href="#project"
            className={active == "project" ? "active" : "none"}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={active == "contact" ? "active" : "none"}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="main-content">
        <section id="home">
          <div className="my_img">
            <img
              src="https://avatars.githubusercontent.com/u/103620239?v=4"
              alt="avatar"
            />
          </div>
          <div className="Im_webd">
            <p>Hey! I am</p>
            <h1>Ankit Patil </h1>
            <div class="container">
              <div class="typed-out">I am a Web Developer.</div>
            </div>
            <button className="all_btn">Download Resume</button>
            <a href="#about">
              <img
                src="https://content.invisioncic.com/p289038/monthly_2020_05/Bounce-arrow.gif.ab5ac6f311d13c20c4a6d256178344bf.gif"
                alt="🔽"
              />
            </a>
          </div>
        </section>

        <section id="about">
          <div data-aos="fade-up" className="about_section">
            <div className="about_img">
              <img
                src="https://avatars.githubusercontent.com/u/103620239?v=4"
                alt="avatar"
              />
            </div>
            <div className="about_info">
              <h1>About Me</h1>
              <p
                style={{
                  color: "#000000",
                  width: "90%",
                  marginTop: "30px",
                  textAlign: "justify",
                }}
              >
                Web Developer with a passion for web application development.
                Skilled in conceptualizing, designing, developing, and deploying
                software containing logical and mathematical solutions to
                business problems. Dedicated to driving innovation with the
                ability to follow industry and technological trends, and
                facilitating early adoption of innovations.
              </p>
              <ul style={{ width: "90%", lineHeight: "2", marginTop: "30px" }}>
                <li class="d-flex">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Name:
                  </span>{" "}
                  <span>Ankit Patil</span>
                </li>
                <li class="d-flex">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Date of birth:
                  </span>{" "}
                  <span>June 26, 2000</span>
                </li>
                <li class="d-flex">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Address:
                  </span>{" "}
                  <span>Kopargaon ,Maharashtra ,India</span>
                </li>
                <li class="d-flex">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Pin code:
                  </span>{" "}
                  <span>423601</span>
                </li>
                <li class="d-flex">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Email:
                  </span>{" "}
                  <span>ankitpatil2341@gmail.com</span>
                </li>
                <li class="d-flex">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Phone:{" "}
                  </span>{" "}
                  <span>+91-7972592414</span>
                </li>
              </ul>

              <div className="d-flex btn_div" style={{ marginTop: "30px" }}>
                <button className="all_btn">Download Resume</button>
                <a href="https://github.com/ankit2341" target="_blank">
                  <button className="all_git_btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        width="40"
                        height="40"
                        fill="#ffffff"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </span>{" "}
                    <span style={{ marginLeft: "10px" }}> Github</span>
                  </button>
                </a>

                <a
                  target="_blank"
                  href="http://www.linkedin.com/in/ankit-patil-948036196"
                >
                  <button className="all_link_btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="40"
                        height="40"
                        fill="#ffffff"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </span>{" "}
                    <span style={{ marginLeft: "10px" }}> LinkedIn</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="project">
          <h1>Project</h1>
        </section>

        <section id="contact">
          <h1>Contact</h1>
        </section>
      </div>
      <footer className="footer"></footer>
    </>
  );
};

export default Home;
