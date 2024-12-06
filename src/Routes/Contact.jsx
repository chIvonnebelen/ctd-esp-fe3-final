import { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';
import styles from './Contact.module.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={`${styles.container} ${state.theme}`}>
      <h2 className={styles.title}>Want to know more?</h2>
      <p className={styles.subtitle}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact