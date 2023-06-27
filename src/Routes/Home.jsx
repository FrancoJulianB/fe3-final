import React from 'react'
import Card from '../Components/Card'
import { usePage } from '../Components/utils/global.context'
import { Link, useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {pageState} = usePage()
  const params = useParams()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home