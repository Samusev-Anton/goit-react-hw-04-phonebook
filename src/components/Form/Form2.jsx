import React from 'react';
import { InputStyle, Submit } from './Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const Form2 = ({ onSubmit }) => {
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    console.log(event.currentTarget.name);
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'user':
        setUser(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: user,
      number: number,
    };

    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setUser('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputStyle htmlFor="">
          Name
          <input
            type="text"
            value={user}
            name="user"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </InputStyle>
        <InputStyle htmlFor="">
          Number
          <input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </InputStyle>

        <Submit type="submit">Add contacts</Submit>
      </form>
    </>
  );
};

export default Form2;
