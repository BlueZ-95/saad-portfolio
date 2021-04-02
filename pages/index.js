import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saad Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`${styles.headerContainer} container-fluid`}>
        <div className='row h-100'>
          <div className='col-sm-6 flex-column'>
            <div className={`${styles.menuContainer} col d-flex align-items-center justify-content-between`}>
              <h1>me.</h1>
              <h3>menu</h3>
            </div>
            <div className={`${styles.headerLeftContent} `}></div>
          </div>
          <div className='col-sm-6 flex-column'>
            <div className='h-75'>Right-Top</div>
            <div className=''>
              <div className='col-sm-6 d-inline-block'>Right-Bottom-Left</div>
              <div className='col-sm-6 d-inline-block'>Right-Bottom-Right</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
