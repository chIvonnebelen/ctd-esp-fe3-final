import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import styles from './Footer.module.css';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
    <div className={styles.redBar}>
      Make with love by Belen
    </div>
    <footer className={`${styles.footer} ${state.theme}`}>
      <div className={styles.brandContainer}>
        <p className={styles.brandText}>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo'className={styles.brandLogo} />
      </div>
      <div className={styles.socialContainer}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.png" alt="facebook" className={styles.socialIcon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img  src="/images/instagram.png" alt="instagram" className={styles.socialIcon} />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img  src="/images/whatsapp.png"  alt="whatsapp" className={styles.socialIcon} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img  src="/images/tiktok.png"  alt="tiktok"  className={styles.socialIcon} />
        </a>
      </div>

    </footer>
    </>
    
  );
};

export default Footer;
