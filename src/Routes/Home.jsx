import React from 'react'
import Card from '../Components/Card'
import { usePage } from '../Components/utils/global.context'
import { Link, useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {pageState} = usePage()
  const dentistas = pageState.dentistas[0]
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map(dentista => <Card  name={dentista.name} username={dentista.username} id={dentista.id} email={dentista.email}/>)}
      </div>
    </main>
  )
}

export default Home