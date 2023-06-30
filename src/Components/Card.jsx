import React, { useRef, useState } from "react";
import { Link} from 'react-router-dom'
import { usePage } from "./utils/global.context";
import axios from "axios";
import { FaHeart } from 'react-icons/fa/index.esm';

const Card = ({ name, username, id, email }) => {
  const {pageState, pageDispatch} = usePage()
  const urlUser = 'https://jsonplaceholder.typicode.com/users/' + id
  const [isTransitioning, setIsTransitioning] = useState(false);

  const addFav = ()=>{
    
      axios(urlUser)
      .then(res => {
        pageDispatch({type: 'FAV', payload: res.data})
      }) 

      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2300);
  }
  
  

  const isFav = () => {
    return pageState.favs.some((fav) => fav.id === id);
  }

  const handleSource = () =>{
    if (isTransitioning && isFav()){
      return "../public/images/messi.gif"
    } else if(isTransitioning && !isFav()){
      return "../public/images/reversed-messi.gif"
    } else {
      return "./images/doctor.jpg"
    }
  }
  

  return (
    
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentista/`+ id }>
      <h4>{name}</h4>
      <h3>{username}</h3>
      </Link>
      
      <img src={handleSource()} alt={"Dr." + name}/>
      <h5>{email}</h5>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
      <button onClick={addFav} className={`favButton ${isFav() ? 'favButton--active' : ''}`}>
        <FaHeart className={`favIcon ${isFav() ? 'favIcon--active' : ''}`} />
      </button>
    </div>
  );
};

export default Card;
