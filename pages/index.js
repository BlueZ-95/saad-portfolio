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

      <header className={`${styles.headerContainer} container-fluid`}>
        <div className='row h-100'>
          <div className='col-sm-5 flex-column p-0' style={{ maxHeight: '95vh' }}>
            <div className={`${styles.menuContainer} col d-flex align-items-start justify-content-between p-4`}>
              <h2 className="fw-bold">me.</h2>
              <h3>menu</h3>
            </div>
            <div className={`${styles.headerLeftContent} col d-flex flex-column align-items-center justify-content-center`}>
              <h1 className="fs-1">I'm <b>SAAD</b></h1><p>Developer based in Vadodara</p>
            </div>
            <div className={`${styles.socialMediaLinks} col fs-4 d-flex align-items-center justify-content-evenly`}>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaLinkedinIn></FaLinkedinIn>
              <FaGithub></FaGithub>
            </div>
          </div>
          <div className='col-sm-7 flex-column p-0'>
            <div className='h-100'>

            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
