import Layout from "../components/Layout";
import { useFetchUser } from '../lib/user'


export default function about() {
  return (
      <Layout
          title = "About | next.js"
          description="agregue una descripcion"
      >
          <h1>About</h1>
      </Layout>

  )
}
// function About() {
//   const { user, loading } = useFetchUser()

//   return (
//     <Layout user={user} loading={loading}>
//       <h1>About</h1>
//       <p>
//         This is the about page, navigating between this page and <i>Home</i> is
//         always pretty fast. However, when you navigate to the <i>Profile</i>{' '}
//         page it takes more time because it uses SSR to fetch the user first;
//       </p>
//     </Layout>
//   )
// }

// export default About

//funcion asicrona para que tarde un poco más en cargar la página.
export async function getServerSideProps() {
    await new Promise((resolved) =>{
      setTimeout(resolved, 1000)
    })
      return{
        props: {}
      }
  }
  
