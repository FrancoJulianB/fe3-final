import React from "react";
import { Link, useParams } from 'react-router-dom'
import { usePage } from "./utils/global.context";


const Card = ({ name, username, id, email }) => {
  const { pageState } = usePage();
  const addFav = () => { 
    
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
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
