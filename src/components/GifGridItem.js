import React from 'react';

const GifGridItem = ({ id, title, src }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={src} />
      <p>{title}</p>
    </div>
  )
};

export default GifGridItem;
