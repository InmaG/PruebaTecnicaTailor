import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
// import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
// import cookie from 'js-cookie';
// import useSWR from 'swr';




export default function Home() {
  return (
    <Layout
      title="Home | Next.js"
      description="esta es la descripcion del home"
      home 
      >

      <section className={utilStyles.headingMd}>
                   
          <p>
          Para acceder a la lista de restaurantes más populares   
          <a href="http://localhost:3000/restaurants/restaurantsList"><strong> Pincha Aquí</strong></a>.
         </p>
      </section>
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
