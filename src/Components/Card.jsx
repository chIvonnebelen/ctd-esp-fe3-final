import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import PropTypes from 'prop-types';

const Card = ({ name, username, id }) => {
  
  const { state } = useContext(ContextGlobal);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isDuplicate = favs.some(fav => fav.id === id);

    if (!isDuplicate) {
      const newFavs = [...favs, { name, username, id }];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      alert("Agregado a Favoritos");
    }
  };

  return (
    <div className={`card ${state.theme}`}>
      <img 
        src="/images/doctor.jpg" 
        alt="doctor" 
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>@{username}</p>
      </Link>
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
