import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg?react';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>&copy; {year} Dogs. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
