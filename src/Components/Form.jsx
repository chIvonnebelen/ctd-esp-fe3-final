import { useState } from "react";
import styles from "./Form.module.css";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: ''
  });

  const [success, setSuccess] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: ''
    };

    if (!formData.fullName) {
      newErrors.fullName = 'Por favor ingrese su nombre completo';
      isValid = false;
    } else if (formData.fullName.length <5) {
      newErrors.fullName = 'El nombre debe tener más de 5 caracteres';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Por favor ingrese su correo electrónico';
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un correo válido (dentist@titis.com)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');

    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      setSuccess(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía email`);
      setFormData({ fullName: '', email: '' });
      setErrors({ fullName: '', email: '' });
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({...formData, fullName: e.target.value});
              if (errors.fullName) setErrors({...errors, fullName: ''});
            }}
            className={styles.input}
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => {
              setFormData({...formData, email: e.target.value});
              if (errors.email) setErrors({...errors, email: ''});
            }}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar consulta
        </button>
      </form>
      {success && <div className={styles.successMessage}>{success}</div>}
    </div>
  );
};

export default Form;
