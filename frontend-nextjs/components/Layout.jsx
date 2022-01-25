import Head from 'next/head';
import styles from '../styles/Layout.module.css'
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'

const name = "Restaurants"

export default function Layout({children, title, description, home}) {
  return (

    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            ></meta>
        </Head>
        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/fotoprueba.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/fotoprueba.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
        <nav>
            <Link href="/">
                <a>Inicio | </a>
            </Link>
            <Link href="/about">
                <a>About | </a>
            </Link>
           
            <Link href="/restaurants/restaurantsList">
                <a>RestaurantsList | </a>
            </Link>

        </nav>
        
        <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a><strong> ← Back to home</strong></a>
          </Link>
        </div>
      )}
    </div>
    
  );
}

Layout.defaultProps ={
    title: "Next.js | Restaurants List",
    description: "Descripcion restaurantes"
};