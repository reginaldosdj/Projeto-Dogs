import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../Api';
import useFetch from '../../Hooks/useFetch';
const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  async function handleClick(event) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }
  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
