import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { useFetchUser } from '../lib/user'

export default function Home() {
  return (
    <Layout
      title="Home | Next.js"
      description="esta es la descripcion del home"
      home 
      >

      <section className={utilStyles.headingMd}>
          <p>Lista de Restaurantes</p>
          <p>
          Para acceder a la lista de restaurantes más populares  
          <a href="http://localhost:3000/restaurants/restaurantsList"><strong> Pincha Aquí</strong></a>.
         </p>
      </section>
    </Layout>
  )
}

// function Home() {
//   const { user, loading } = useFetchUser()

//   return (
//     <Layout user={user} loading={loading}>
//       <h1>Next.js and Auth0 Example</h1>

//       {loading && <p>Loading login info...</p>}

//       {!loading && !user && (
//         <>
//           <p>
//             To test the login click in <i>Login</i>
//           </p>
//           <p>
//             Once you have logged in you should be able to click in{' '}
//             <i>Profile</i> and <i>Logout</i>
//           </p>
//         </>
//       )}

//       {user && (
//         <>
//           <h4>Rendered user info on the client</h4>
//           <img src={user.picture} alt="user picture" />
//           <p>nickname: {user.nickname}</p>
//           <p>name: {user.name}</p>
//         </>
//       )}
//     </Layout>
//   )
// }

// export default Home



//funcion asicrona para que tarde un poco más en cargar la página.

export async function getServerSideProps() {
  await new Promise((resolved) =>{
    setTimeout(resolved, 1000)
  })
    return{
      props: {}
    }
}
