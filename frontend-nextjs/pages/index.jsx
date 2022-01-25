import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

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
