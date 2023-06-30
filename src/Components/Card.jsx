import React from "react";
import { Link} from 'react-router-dom'
import { usePage } from "./utils/global.context";
import axios from "axios";
import { FaHeart } from 'react-icons/fa';


const Card = ({ name, username, id, email }) => {
  const {pageState, pageDispatch} = usePage()
  const urlUser = 'https://jsonplaceholder.typicode.com/users/' + id

  
  const addFav = ()=>{
    
      axios(urlUser)
      .then(res => {
        pageDispatch({type: 'FAV', payload: res.data})
      }) 
  }

  const isFav = () => {
    return pageState.favs.some((fav) => fav.id === id);
  }
  
  

  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentista/`+ id }>
        <h4>{name}</h4>
        <h3>{username}</h3>
        </Link>
        
        <img style={{width: "100%", height:"100%"}} src="./images/doctor.jpg" alt={"Dr." + name}/>
        <h5>{email}</h5>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={addFav} className={`favButton ${isFav() ? 'favButton--active' : ''}`}>
          <FaHeart className={`favIcon ${isFav() ? 'favIcon--active' : ''}`} />
        </button>E
    </div>
  );
};

export default Card;
