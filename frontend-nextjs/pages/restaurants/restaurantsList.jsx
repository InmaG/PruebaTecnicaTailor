import Layout from '../../components/Layout'
import Link from 'next/link'

export default function restaurantsList({ data }) {
  return (
    <Layout>
        <h1>Lista de Restaurantes</h1>

        {data.map(({ id, title, body }) => (
          
          <div key={id}>
            <h3>
              <Link href= {`/restaurants/${id}`}>
              <a>
                {id} - {title}
               </a>
              </Link>
              
              </h3>
            <p>{body}</p>
            

          </div>
        
        ))}
        {/* {data.map(({ id, name, neighborhood,photograph,address }) => (
          
            <div key={id}>
              <h3>
                <Link href= {`/restaurants/${id}`}>
                <a>
                  {id} - {name}
                 </a>
                </Link>
                
                </h3>
              <p>{neighborhood}</p>
              <img>{photograph}</img>
              <p>{address}</p>

            </div>
          
          ))} */}
    </Layout>   
  );
}

export async function getStaticProps () {

    try {
      
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
      //const res = await fetch ('http://localhost:3001/api/restaurants/')
      const data = await res.json()
      console.log(data)
      return {
        props: {
          data
        }
      }
    } catch (error) {
      console.log(error)
    }

}