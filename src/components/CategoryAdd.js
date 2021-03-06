import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ submit, setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(prev => [inputValue, ...prev]);
      setInputValue('');
    }
    // submit(inputValue);
  };

  CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default CategoryAdd;
