import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <React.Fragment>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map(img => <GifGridItem key={img.id} {...img}></GifGridItem>)}
      </div>
    </React.Fragment>
  )
}

export default GifGrid;