import Layout from "../../components/Layout"


//nos pinta por el parametro data
export default function detalleRestaurant({data}) {
    return(
        <Layout>
            <h1>
                {data.id} - {data.name}
            </h1>
            <p>{data.neighborhood}</p>
            <img>{data.photograph}</img>
            <p>{data.address}</p>
        </Layout>

    )
    
}
//esta funcion va darnos todos los id y va drear id1.jsx... id2.jsx...n
//aquí hacemos las rutas dinámicas hace el recorrido y crea todos los restaurantes

export async function getStaticPaths(){
    try {
        const res = await fetch ("http://localhost:3001/api/restaurants/")
        //Aqui tenemos los data
        const data = await res.json()

        //Ahora construimos los paths, hacemos un array con todas las rutas dinamicas
        const paths = data.map(({id}) => ({params: {id:`${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }

}

//para pintar todos los restaurantes, el fetch deberia mostrar el id1, id2...para eso le pasamos 
//como parametro params
export async function getStaticProps ({params}) {

    try {
      
      
      const res = await fetch ('http://localhost:3001/api/restaurants/' + params.id)
      const data = await res.json()

      return {
        props: {
          data
        }
      }
    } catch (error) {
      console.log(error)
    }

}