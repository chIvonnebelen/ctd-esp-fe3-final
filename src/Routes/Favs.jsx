import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([]);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const localFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(localFavs);
  }, []);

  return (
    
    <div className={state.theme}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favs.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  
  );
};

export default Favs;
