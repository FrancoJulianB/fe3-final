import React from "react";
import Card from "../Components/Card";
import { usePage } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { pageState, pageDispatch } = usePage();
  const favs = pageState.favs
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favs.map(dentista => <Card  name={dentista.name} username={dentista.username} id={dentista.id} email={dentista.email} key={dentista.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
