import '../styles/globals.css'
import { useState } from 'react'
import Router from 'next/router'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Loader from "../components/Loader"
import Login from '../pages/Login/Login'

// import '../components/Title/Title.css'



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on ("routeChangeStart", (url) =>{
    console.log("Route is changing...")
    setLoading(true)
  })
  Router.events.on ("routeChangeComplete", (url) =>{
    console.log("Route is changing is complete...")
    setLoading(false)
  })

  return (
    <>
       
             {loading && <Loader />}
      <Component {...pageProps} />
      <Login />
      
    </>
    
  )
}

export default MyApp
