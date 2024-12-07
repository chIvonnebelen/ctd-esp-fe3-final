import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import PropTypes from 'prop-types';

const Card = ({ name, username, id }) => {
  
  const { state, dispatch } = useContext(ContextGlobal);

  const isFavorite = state.favs.some(fav => fav.id === id);

  const handleFavToggle = () => {
    if (isFavorite) {
     
      dispatch({ type: "REMOVE_FAV", payload: { id } });
      alert("Removido de Favoritos");
    } else {
      
      dispatch({ type: "ADD_FAV", payload: { name, username, id } });
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
      <h3>{name}</h3>
      <p>@{username}</p>
      <Link to={`/dentist/${id}`}>
        View Details
      </Link>
        <button onClick={handleFavToggle} className="favButton">{isFavorite ? "❌" : "⭐"}</button>
    </div>
  
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
