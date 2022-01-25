
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout'



export default function detalle() {
  return (
    <Layout>
        
        <h1>Detalle del restaurante</h1>
           <Image
               src="/img/fotoprueba.jpg"
               width={600}
               height={600}
               alt="Imagen de prueba"
           ></Image>
           <Link href="/">
                <a>Volever al inicio</a>
         </Link>

    </Layout>

);
}
