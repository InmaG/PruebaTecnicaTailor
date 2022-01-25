import Layout from '../../components/Layout'
import Link from 'next/link'

export default function restaurantsList({ data }) {
  return (
    <Layout>
        <h1>Lista de Restaurantes</h1>

        {data.map(({ id, name, address, cuisine_type }) => (
          
          <div key={id}>
          <h3>
            <Link href= {`/restaurants/${id}`}>
            <a>
              {name} - {address}
             </a>
            </Link>

            </h3>
          <p>{cuisine_type}</p>


        </div>
        
        ))}
        
    </Layout>   
  );
}

export async function getStaticProps () {

    try {
      
     
      const res = await fetch ('http://localhost:3001/api/restaurants/')
      const data = await res.json()
      // console.log(data)
      return {
        props: {
          data : data.restaurants
        }
      }
    } catch (error) {
      console.log(error)
    }

}