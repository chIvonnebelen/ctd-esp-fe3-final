import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import styles from './Navbar.module.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`${styles.navbar} ${state.theme}`}>
      <h1 className={styles.navTitle}>DH Odonto</h1>
      <div className={styles.navLinks}>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        <Link to="/favs" className={styles.link}>Favs</Link>
        <button 
          onClick={handleThemeChange} 
          className={styles.themeButton}
        >
          {state.theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
};

export default Navbar;