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
          <div className='row p-3'>
            <div className='col-sm-6 offset-sm-1'>
              <ul className='list-inline'>
                <li className='list-inline-item'>Menu</li>
                <li className='list-inline-item'>About</li>
                <li className='list-inline-item'>Contact</li>
              </ul>
            </div>
            <div className='col-sm-4 text-end'>
              <ul className='list-inline'>
                <li className='list-inline-item'>a</li>
                <li className='list-inline-item'>b</li>
                <li className='list-inline-item'>c</li>
              </ul>
            </div>
          </div>
          <div className='row pt-5'>
            <div className='col-sm-6 pt-5 h-100 offset-sm-1 d-flex align-items-start justify-content-center'>
              <div className='d-flex flex-column align-items-start justify-content-start pt-5'>
                <div className='w-75'>
                  <h4>Hey,</h4>
                  <h1 className='fw-bold'>I'm Saad</h1>
                  <p className={`${styles.headerPersonalInfo} fs-5`}>Freelancer <b>Web Developer</b>, also passionate in making beautiful <b>UI/UX</b> designs.</p>
                  <button className='btn btn-primary btn-custom w-50 mt-3 shadow-lg'>Hire Me</button>
                </div>
              </div>
            </div>
            <div className='col-sm-4 p-0 pt-5 offset-sm-1'>
              <div className={`${styles.avatarContainer}  shadow-lg`}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className={`${styles.mainContainer} container-fluid`}>
        {/* About Me */}
        <div className='row justify-content-center'>
          {/* <div className={`${styles.aboutMeContainer} col-sm-12`}> */}
          <div className={`${styles.aboutMeImage} col-sm-3 p-2`}>
            <Image src='/aboutMe.jpg' width={128} height={128} layout='responsive' objectFit='fill' />
          </div>
          <div className='col-sm-5 offset-sm-1 pt-2'>
            <h2 className='fs-1 fw-bold'>About me</h2>
            <ul className="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
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
          {/* </div> */}
        </div>

        {/* Skills */}
        <div className={`mt-5 pt-5`}>
          <div className='row'>
            <p className='col fs-4 text-center text-secondary'>Skills</p>
          </div>
          <div className='row'>
            <h2 className='col pt-3 fw-bold fs-1 text-center'>Expertise</h2>
          </div>
          <div className='row'>
            <p className='col pt-3 fs-5 text-center text-secondary'>Following are the some of the expertise containing development and SEO.</p>
          </div>
          <div className={`${styles.skillsContainer} row justify-content-center p-3 pt-5`}>
            <div className="card col-sm-3 text-center shadow-lg m-4">
              <div className="card-body">
                <Image src='/ui-design.svg' width={128} height={128} />
                <h3 className='fs-3 fw-bold pt-2 pb-2'>UI/UX Design</h3>
                <p className='fs-6 text-secondary'>I've been exposed to various design technologies i.e Figma, Frammer. I can develop entire user-interface from scratch as per the requirement.</p>
              </div>
            </div>
            <div className="card col-sm-3 text-center shadow-lg m-4">
              <div className="card-body">
                <Image src='/web-development.svg' width={128} height={128} />
                <h3 className='fs-3 fw-bold pt-2 pb-2'>Web Development</h3>
                <p className='fs-6 text-secondary'>I've developed applications using variuos front-end technologies as well as back-end technologies i.e ReactJs, NextJs, VueJs, ASP.Net, NodeJs etc.</p>
              </div>
            </div>
            <div className="card col-sm-3 text-center shadow-lg m-4">
              <div className="card-body">
                <Image src='/local-seo.svg' width={128} height={128} />
                <h3 className='fs-3 fw-bold pt-2 pb-2'>Local SEO</h3>
                <p className='fs-6 text-secondary'>I've used some of the best SEO tools to index web application, website in the first page of Google search (Search Engine Result Page).</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Me */}
      <div className={`${styles.contactMe}`}>
        <form className='container-fluid'>
          <div class="row justify-content-center mb-3">
            <div className='col-sm-4'>
              <label for="name" class="form-label">Name :</label>
              <input type="text" class="form-control col-sm-4" id="name" placeholder="Your Name" />
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div className='col-sm-4'>
              <label for="email" class="form-label ">Email :</label>
              <input type="email" class="form-control col-sm-3" id="email" placeholder="Your Email" />
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div className='col-sm-4'>
              <label for="message" class="form-label">Message :</label>
              <textarea class="form-control col-sm-4" id="message" rows="3" placeholder="Your Message"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
