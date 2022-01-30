import Layout from "../components/Layout";


import { useFetchUser } from '../lib/user'
 


export default function about() {
  const { user, loading } = useFetchUser()
  return (
      <Layout
           user={user} loading={loading}
          title = "About | next.js"
          description="agregue una descripcion"
      >
          <h1>About</h1>
          <a>Si quieres saber más sobre nosotros, escribenos a restaurantsInfo@gmail.com</a>
      </Layout>

  )
}



//funcion async delay
export async function getServerSideProps() {
    await new Promise((resolved) =>{
      setTimeout(resolved, 1000)
    })
      return{
        props: {}
      }
  }
  
