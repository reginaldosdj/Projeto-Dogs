import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container main-container">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
