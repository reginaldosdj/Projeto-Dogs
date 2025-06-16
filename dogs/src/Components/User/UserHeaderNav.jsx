import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import Stats from '../../Assets/estatisticas.svg?react';
import Feed from '../../Assets/feed.svg?react';
import styles from './UserHeaderNav.module.css';
const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate('/login');
  }
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Feed /> {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Stats /> {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto /> {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
