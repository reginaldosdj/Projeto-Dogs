import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);
  if (login) {
    return <Navigate to="/conta" />;
  }
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastre-se" element={<LoginCreate />} />
          <Route path="/perdeu-senha" element={<LoginPasswordLost />} />
          <Route path="/resetar-senha" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
