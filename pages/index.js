import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPaperPlane, FaDownload } from "react-icons/fa";
import projects from "../utilities/projects.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saad Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is Saad Patel's portfolio"
        ></meta>
      </Head>

      {/* Header */}
      <header id="header" className={`${styles.headerContainer}`}>
        <div className="container-fluid h-100">
          <div className="row p-3">
            <div className="col-sm-2 offset-sm-1 fw-bold fs-3">
              <p>me.</p>
            </div>
          </div>
          <div className="row pt-5">
            <div className={`${styles.mobileAvatarCol} p-0 pt-5`}>
              <div
                className={`${styles.mobileAvatarContainer} shadow-lg`}
              ></div>
            </div>
            <div className="col-sm-6 pt-5 h-100 d-flex align-items-start justify-content-center">
              <div className="d-flex flex-column align-items-start justify-content-start pt-5">
                <div className="">
                  <h4>Hey,</h4>
                  <h1 className="fw-bold">I'm Saad</h1>
                  <p className={`${styles.headerPersonalInfo} fs-5`}>
                    <b>Full Stack</b> Developer <br /> passionate in making
                    beautiful <b>UI/UX</b> designs,
                    <br />
                    and awesome <b>Web Applications</b>.
                  </p>
                  <a
                    href="#contactMe"
                    className="btn btn-primary btn-custom p-3 w-75 mt-4 mb-5 shadow-lg"
                  >
                    Hire Me
                  </a>
                  <div
                    className={`${styles.headerSocialLinks} col-sm-8 d-flex align-items-center justify-content-between`}
                  >
                    <span>
                      <a
                        href="https://www.instagram.com/i.am_saad_"
                        target="blank"
                      >
                        <FiInstagram />
                      </a>
                    </span>
                    <span>
                      <a href="https://twitter.com/SaadPatel73" target="blank">
                        <FiTwitter />
                      </a>
                    </span>
                    <span>
                      <a href="https://github.com/BlueZ-95" target="blank">
                        <FiGithub />
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/saad-patel-b32b87187/"
                        target="blank"
                      >
                        <FiLinkedin />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.avatarContainerCol} col-sm-4 p-0 pt-5 offset-sm-1`}
            >
              <div className={`${styles.avatarContainer} shadow-lg`}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className={`${styles.mainContainer} container-fluid pt-5`}>
        {/* About Me */}
        <div id="about" className="row justify-content-center">
          <p className="col text-center fs-4 text-secondary">About me</p>
        </div>
        <div className="row justify-content-center">
          {/* <div className={`${styles.aboutMeContainer} col-sm-12`}> */}
          <div className={`${styles.aboutMeImage} col-sm-3 p-2`}>
            <Image
              src="/aboutMe.svg"
              width={128}
              height={128}
              layout="responsive"
              objectFit="fill"
              alt="About Me"
            />
          </div>
          <div className="col-sm-5 offset-sm-1 pt-5">
            <ul
              className="nav nav-pills mb-3 mt-4"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link flex-sm-fill active"
                  id="pills-life-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-life"
                  type="button"
                  role="tab"
                  aria-controls="pills-life"
                  aria-selected="true"
                >
                  Life
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link flex-sm-fill"
                  id="pills-education-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-education"
                  type="button"
                  role="tab"
                  aria-controls="pills-education"
                  aria-selected="false"
                >
                  Education
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link flex-sm-fill"
                  id="pills-experience-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-experience"
                  type="button"
                  role="tab"
                  aria-controls="pills-experience"
                  aria-selected="false"
                >
                  Experience
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-life"
                role="tabpanel"
                aria-labelledby="pills-life-tab"
              >
                <p className={`${styles.aboutMeDesc}`}>
                  I'm a developer based in Vadodara, A city in Gujarat. I've
                  sole interest in <b>Web Development</b> and <b>UI/UX</b>{" "}
                  design. My simple moto is to deliver perfect web solution to
                  my client's requirements.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-education"
                role="tabpanel"
                aria-labelledby="pills-education-tab"
              >
                <p className={`${styles.aboutMeDesc}`}>
                  I've completed my graduation degree in B.Com. Having sole
                  interest in coding I've pursued my post-graduation degree in
                  Master of Computer Applications <b>(MCA)</b>.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-experience"
                role="tabpanel"
                aria-labelledby="pills-experience-tab"
              >
                <p className={`${styles.aboutMeDesc}`}>
                  I've <b>2+</b> years of exeprience in coding including
                  developing desktop as well as web-based applications. I work
                  at <b>ThinkSense.Ai</b>, a London based tech company with
                  motivated to APR automations.
                </p>
              </div>
            </div>
            <a
              href="/SAAD PATEL RESUME.docx.pdf"
              className="btn btn-primary btn-custom p-3 col-sm-6 mt-5 shadow"
              download
            >
              <span className="fs-5" style={{ marginRight: "20px" }}>
                Download CV
              </span>
              <FaDownload />
            </a>
          </div>
          {/* </div> */}
        </div>

        {/* Skills */}
        <div id="skills" className="mt-5 pt-5">
          <div className="row">
            <p className="col fs-4 text-center text-secondary">Skills</p>
          </div>
          <div className="row">
            <h2 className="col pt-3 fw-bold fs-1 text-center">Expertise</h2>
          </div>
          <div className="row">
            <p className="col pt-3 fs-5 text-center">
              Following are the some of the expertise containing development and
              SEO.
            </p>
          </div>
          <div
            className={`${styles.skillsContainer} row justify-content-center p-3 pt-5`}
          >
            <div
              className="card col-sm-3 text-center shadow-lg m-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <Image
                  src="/ui-design.svg"
                  width={128}
                  height={128}
                  alt="UI Design"
                />
                <h3 className="fs-3 fw-bold pt-2 pb-2">UI/UX Design</h3>
                <p className="fs-6 text-secondary">
                  I've been exposed to various design technologies i.e Figma,
                  Frammer. I can develop entire user-interface from scratch as
                  per the requirement.
                </p>
              </div>
            </div>
            <div
              className="card col-sm-3 text-center shadow-lg m-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <Image
                  src="/web-development.svg"
                  width={128}
                  height={128}
                  alt="Web Development"
                />
                <h3 className="fs-3 fw-bold pt-2 pb-2">Web Development</h3>
                <p className="fs-6 text-secondary">
                  I've developed applications using variuos front-end
                  technologies as well as back-end technologies i.e ReactJs,
                  NextJs, VueJs, ASP.Net, NodeJs etc.
                </p>
              </div>
            </div>
            <div
              className="card col-sm-3 text-center shadow-lg m-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <Image
                  src="/local-seo.svg"
                  width={128}
                  height={128}
                  alt="Local SEO"
                />
                <h3 className="fs-3 fw-bold pt-2 pb-2">Local SEO</h3>
                <p className="fs-6 text-secondary">
                  I've used some of the best SEO tools to index web application,
                  website in the first page of Google search (Search Engine
                  Result Page).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects */}
      <section className={`${styles.projectsContainer} container mt-5 pt-5`}>
        <div className="row">
          <p className="col fs-4 text-center text-secondary">Work</p>
        </div>
        <div className="row">
          <h2 className="col pt-3 fw-bold fs-1 text-center">Projects</h2>
        </div>
        <div className="row">
          <p className="col pt-3 fs-5 text-center">
            Following are the some of my professional as well as personal
            projects.
          </p>
        </div>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="row d-flex my-5 mx-2 align-items-center justify-content-center shadow"
            >
              {index % 2 == 0 && (
                <div className="col-sm-4 project-image float-end">
                  <Image
                    src={"/Projects/" + project.projectImage}
                    width={256}
                    height={256}
                    layout="responsive"
                  />
                </div>
              )}
              <div className="col-sm-7 project-description d-flex flex-column align-items-start justify-content-between">
                <h3 className="mb-3">{project.projectName}</h3>
                <p className="">{project.projectDescription}</p>
                <a
                  href={project.projectURL}
                  target="_blank"
                  className="px-3 py-2 rounded text-white"
                >
                  View Project
                </a>
              </div>
              {index % 2 == 1 && (
                <div className="col-sm-4 project-image float-end">
                  <Image
                    src={"/Projects/" + project.projectImage}
                    width={256}
                    height={256}
                    layout="responsive"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Contact Me */}
      <div id="contactMe" className="container-fluid mt-5 pt-5">
        <div className="row justify-content-center">
          <form
            className="col-sm-4 offset-sm-1 shadow p-4 bg-white"
            style={{ borderRadius: "20px" }}
          >
            <p className="fs-4 text-center fw-bold">Contact me for any query</p>
            <div className="form-group p-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="form-group p-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>

            <div className="form-group p-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                maxLength="10"
                placeholder="Your Mobile No."
                required=""
              />
            </div>
            <div className="form-group p-3">
              <textarea
                className="form-control textarea-contact"
                rows="5"
                id="comment"
                name="FB"
                placeholder="Type Your Message Here..."
                required=""
              />
            </div>
            <div className="form-group p-3">
              <button className="btn btn-primary btn-custom w-100 float-end mt-3 mb-2 p-3">
                <span className="fs-5" style={{ marginRight: "20px" }}>
                  Send Message
                </span>
                <FaPaperPlane />
              </button>
            </div>
          </form>
          <div className={`${styles.contactMeImage} col-sm-4 offset-sm-1`}>
            <Image
              src="/contactMe.svg"
              width={500}
              height={500}
              alt="Contact Me"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="container p-3 mt-5">
          <div className="row justify-content-center">
            <div className="col-sm-4 text-center d-flex align-items-center justify-content-evenly text-secondary p-4">
              <a href="#header">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-3 text-center fs-4 d-flex align-items-center justify-content-evenly">
              <span>
                <a href="https://www.instagram.com/i.am_saad_" target="blank">
                  <FiInstagram />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/SaadPatel73" target="blank">
                  <FiTwitter />
                </a>
              </span>
              <span>
                <a href="https://github.com/BlueZ-95" target="blank">
                  <FiGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/saad-patel-b32b87187/"
                  target="blank"
                >
                  <FiLinkedin />
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
