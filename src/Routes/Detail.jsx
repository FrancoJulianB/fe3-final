import React, { useEffect } from 'react'
import { usePage } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
 
  const {pageState, pageDispatch} = usePage()
    const {id} = useParams()
    const urlUser = 'https://jsonplaceholder.typicode.com/users/' + id
    
    useEffect(() => {
        axios(urlUser)
        .then(res => {
            pageDispatch({type: 'GET_USER', payload: res.data})
        })
    }, [])

    const dentista = pageState.dentista

  return (
    <>
      <h1>{dentista.name}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <p>Email: {dentista.email}</p>
      <p>Telefono: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>
      
        
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail