import Layout from "../components/Layout";
// import { useFetchUser } from '../lib/user'


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



//funcion async delay
export async function getServerSideProps() {
    await new Promise((resolved) =>{
      setTimeout(resolved, 1000)
    })
      return{
        props: {}
      }
  }
  
