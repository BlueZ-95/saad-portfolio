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
            <div className='col-sm-6 offset-sm-1 d-flex align-items-start justify-content-center'>
              <div className='d-flex flex-column align-items-start justify-content-start pt-5'>
                <div className='w-75'>
                  <h4>Hey,</h4>
                  <h1>I'm Saad</h1>
                  <p className={`${styles.headerPersonalInfo} fs-5`}>Freelancer <b>Web Developer</b>, also passionate in making beautiful <b>UI/UX</b> designs.</p>
                  <button className='btn btn-primary btn-custom w-50 mt-3 shadow'>Hire Me</button>
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
          <div className='row h-25'>
            <div className={`${styles.aboutMeContainer} col-sm-10 offset-sm-1 d-flex`}>
              <div className={`${styles.aboutMeImage} col-sm-4 rounded shadow-lg`}>
                <Image src='/AboutMe.svg' width={128} height={128} layout='responsive' />
              </div>
              <div className='col-sm-6 offset-sm-2 d-flex flex-column align-items-start justify-content-start pt-5'>
                <h2>About me</h2>
                <p>a web developer</p>
              </div>
            </div>
          </div>

          {/* Skills */}
        </div>
      </main>
    </div>
  )
}
