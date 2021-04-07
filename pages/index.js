import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saad Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={`${styles.headerContainer}`}>
        <div className="container-fluid h-100">
          <div className='row h-25 d-flex align-items-center'>
            <div className='col-sm-8 h-50'>
              <ul className='col-sm-10 offset-sm-2 d-flex'>
                <li className='col-sm-1'>Menu</li>
                <li className='col-sm-1'>About</li>
                <li className='col-sm-1'>Contact</li>
              </ul>
            </div>
            <div className='col-sm-4 h-50'>
              <ul className='d-flex align-items-center justify-content-end'>
                <li className='col-sm-2'>a</li>
                <li className='col-sm-2'>b</li>
                <li className='col-sm-2'>c</li>
              </ul>
            </div>
          </div>
          <div className='row h-75 pt-5'>
            <div className='col-sm-6 h-100 offset-sm-1 d-flex align-items-start justify-content-center'>
              <div className='d-flex flex-column align-items-start justify-content-start pt-5'>
                <div className='w-75'>
                  <h4>Hey,</h4>
                  <h1 className='fw-bold'>I'm Saad</h1>
                  <p className={`${styles.headerPersonalInfo} fs-5`}>Freelancer <b>Web Developer</b>, also passionate in making beautiful <b>UI/UX</b> designs.</p>
                  <button className='btn btn-primary btn-custom w-50 mt-3 shadow-lg'>Hire Me</button>
                </div>
              </div>
            </div>
            <div className='col-sm-4 offset-sm-1 p-0'>
              <div className={`${styles.avatarContainer} w-75 h-75 shadow-lg`}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className={`${styles.mainContainer}`}>
        <div className='container h-100'>
          {/* About Me */}
          <div className='row'>
            <div className={`${styles.aboutMeContainer} col-sm-10 offset-sm-1 d-flex`}>
              <div className={`${styles.aboutMeImage} col-sm-4 shadow-lg overflow-hidden`}>
                <Image src='/aboutMe.jpg' width={128} height={128} layout='responsive' />
              </div>
              <div className='col-sm-6 offset-sm-1 d-flex flex-column align-items-start justify-content-start pt-2'>
                <h2 className='fs-1 fw-bold'>About me</h2>
                <ul className="nav nav-pills flex-column flex-sm-row mb-3 mt-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link flex-sm-fill active" id="pills-life-tab" data-bs-toggle="pill" data-bs-target="#pills-life" type="button" role="tab" aria-controls="pills-life" aria-selected="true">Life</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link flex-sm-fill" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link flex-sm-fill" id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-life" role="tabpanel" aria-labelledby="pills-life-tab">
                    <p className={`${styles.aboutMeDesc}`}>
                      I'm a developer based in Vadodara, A city in Gujarat. I've sole interest in <b>Web Development</b> and <b>UI/UX</b> design.
                      My simple moto is to deliver perfect web solution to my client's requirements.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                    <p className={`${styles.aboutMeDesc}`}>
                      I've completed my graduation degree in B.Com. Having sole interest in coding I've pursued my post-graduation degree in Master of Computer Applications <b>(MCA)</b>. I've knowledge of various in demand web technologies.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab">
                    <p className={`${styles.aboutMeDesc}`}>
                      I've <b>2+</b> years of exeprience in coding including developing desktop as well as web-based applications. I work at <b>ThinkSense.Ai</b>, a London based tech company with motivated to APR automations.
                    </p>
                  </div>
                </div>
                <button className='btn btn-primary btn-custom w-50 mt-3 shadow'>Download CV</button>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className='row mt-5 pt-5'>
            <p className='col-sm-2 offset-sm-5 pt-3 fs-4 text-center text-secondary'>Skills</p>
            <h2 className='col-sm-2 offset-sm-5 pt-3 fw-bold fs-1 text-center'>Expertise</h2>
            <p className='col-sm-4 offset-sm-4 pt-3 fs-5 text-center text-secondary'>Following are the some of the expertise containing development and SEO.</p>
            <div className={`${styles.expertiseContainer} col-sm-12 d-flex align-items-center justify-content-evenly pt-5`}>
              <div className="card col-sm-3 text-center shadow-lg p-4">
                <div className="card-body">
                  <Image src='/ui-design.svg' width={128} height={128} />
                  <h3 className='fs-3 fw-bold pt-2 pb-2'>UI/UX Design</h3>
                  <p className='fs-6 text-secondary'>I've been exposed to various design technologies i.e Figma, Frammer. I can develop entire user-interface from scratch as per the requirement.</p>
                </div>
              </div>
              <div className="card col-sm-3 text-center shadow-lg p-4">
                <div className="card-body">
                  <Image src='/web-development.svg' width={128} height={128} />
                  <h3 className='fs-3 fw-bold pt-2 pb-2'>Web Development</h3>
                  <p className='fs-6 text-secondary'>I've developed applications using variuos front-end technologies as well as back-end technologies i.e ReactJs, NextJs, VueJs, ASP.Net, NodeJs etc.</p>
                </div>
              </div>
              <div className="card col-sm-3 text-center shadow-lg p-4">
                <div className="card-body">
                  <Image src='/local-seo.svg' width={128} height={128} />
                  <h3 className='fs-3 fw-bold pt-2 pb-2'>Local SEO</h3>
                  <p className='fs-6 text-secondary'>I've used some of the best SEO tools to index web application, website in the first page of Google search (Search Engine Result Page).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
