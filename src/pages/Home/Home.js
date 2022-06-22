import React from 'react'
import Formulario from '../../components/Formulario'
import Contador from '../../components/Contador'

const Home = () => {
  return (
    <div className="container border">
      <Formulario />
      <Contador />
    </div>
  )
}

export default Home