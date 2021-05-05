import React, {useState} from 'react';
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Iron Man', 'Megan Fox', 'Thanos']);

  const addCategory = (value) => {
    setCategories([...categories, value ]);
  };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <CategoryAdd submit={addCategory} setCategories={setCategories}/>
      <hr/>
      <ol>
        { 
          categories.map(cat => 
            <GifGrid key={cat} category={cat}></GifGrid>
          )
        }
      </ol>
    </div>
  )
}

export default GifExpertApp;
