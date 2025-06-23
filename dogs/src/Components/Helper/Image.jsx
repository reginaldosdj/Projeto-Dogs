import React, { useState } from 'react';
import sytles from './Image.module.css';
const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={sytles.wrapper}>
      {skeleton && <div className={sytles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={sytles.img}
        alt={alt}
        {...props}
      ></img>
    </div>
  );
};

export default Image;
