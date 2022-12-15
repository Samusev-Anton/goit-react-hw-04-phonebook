import React from 'react';
import { useState } from 'react';
import { InputStyle } from './Filter.styled';
// import propTypes from 'prop-types';

export const Filter = ({ onInput }) => {
  const [input, setInput] = useState('');

  const handleInputChange = event => {
    const inputData = event.currentTarget.value;
    setInput(inputData);
    onInput(inputData);
  };

  return (
    <InputStyle htmlFor="">
      Filter
      <input
        type="text"
        value={input}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
    </InputStyle>
  );
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleInputChange: propTypes.func.isRequired,
// };
