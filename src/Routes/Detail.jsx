import React from 'react'
import { usePage } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const {pageState, pageDispatch} = usePage()
    const {id} = useParams()
    console.log(id)
    const urlUser = 'https://jsonplaceholder.typicode.com/users/:id' + id
    
    useEffect(() => {
        axios(urlUser)
        .then(res => {
            console.log(res)
            pageDispatch({type: 'GET_USER', payload: res.data})
        })
    }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail