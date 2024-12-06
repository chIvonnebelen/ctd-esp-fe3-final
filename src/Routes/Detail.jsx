import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setDentist(data))
      .catch(err => console.error("Error fetching dentist:", err));
  }, [id]);

  return (
    <div className={state.theme}>
      <h1>Datos del Dentista {id}</h1>
      {dentist && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start',
          gap: '2rem',
          padding: '2rem'
        }}>
          <img 
            src="/images/doctor.jpg"
            alt="Doctor profile"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>{dentist.name}</td>
              </tr>
              <tr>
                <th>Correo electrónico</th>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <th>Telefono</th>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <th>Stio Web</th>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Detail;