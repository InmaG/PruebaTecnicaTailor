import '../styles/globals.css'
import { useState } from 'react'
import Router from 'next/router'

import Loader from "../components/Loader"

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
    </>
    
  )
}

export default MyApp
