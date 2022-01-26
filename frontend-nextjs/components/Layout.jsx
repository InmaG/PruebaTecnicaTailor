import Head from 'next/head';
import styles from '../styles/Layout.module.css'
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
import Header from './header'

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


// function Layout({ user, loading = false, children }) {
//   return (
//     <>
//       <Head>
//         <title>Next.js with Auth0</title>
//       </Head>

//       <Header user={user} loading={loading} />

//       <main>
//         <div className="container">{children}</div>
//       </main>

//       <style jsx>{`
//         .container {
//           max-width: 42rem;
//           margin: 1.5rem auto;
//         }
//       `}</style>
//       <style jsx global>{`
//         body {
//           margin: 0;
//           color: #333;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//             Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//         }
//       `}</style>
//     </>
//   )
// }

// export default Layout