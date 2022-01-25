import Layout from "../../components/Layout"
 
 
//nos pinta por el parametro data
export default function detalleRestaurant({data}) {
    return(
        <Layout>
            <h1>
                {data.id} - {data.name}
            </h1>
            <p><strong>{data.neighborhood}</strong></p>
            <p><strong>Cuisine Type: </strong>{data.cuisine_type}</p>        
            <img src={data.image} ></img>
            <p><strong>{data.address}</strong></p>
            
            <table align="center" border="4" bordercolor="peru"
            cellpadding="5" cellspacing="20">
                <tr>
                    <td><strong>Operating Hours</strong></td>
                                                
                    
                </tr>
                <tr>
                <th ><strong>Momday : </strong> {data.operating_hours.Monday}</th>
                <th><strong>Tuesday : </strong> {data.operating_hours.Tuesday}</th>
                <th><strong>Wednesday : </strong> {data.operating_hours.Wednesday}</th>
                <th><strong>Thursday : </strong> {data.operating_hours.Thursday}</th>
                <th><strong>Friday : </strong> {data.operating_hours.Friday}</th>
                <th><strong>Saturday : </strong> {data.operating_hours.Saturday}</th>
                <th bgcolor="peru"><strong>Sunday : </strong> {data.operating_hours.Sunday}</th>

                 </tr> 
            </table>
            
            
        </Layout>
 
    )
 
}
//esta funcion va darnos todos los id y va drear id1.jsx... id2.jsx...n
//aquí hacemos las rutas dinámicas hace el recorrido y crea todos los restaurantes
 
export async function getStaticPaths(){
    try {
        const res = await fetch ("http://localhost:3001/api/restaurants/")
        //Aqui tenemos los data
        const data = (await res.json()).restaurants
 
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
          data:data.restaurant
        }
      }
    } catch (error) {
      console.log(error)
    }
 
}