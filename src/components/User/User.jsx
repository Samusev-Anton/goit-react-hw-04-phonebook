import React from 'react';
import propTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { UserList, UserName } from './User.styled';
// let id = nanoid();

const User = ({ filter, onDeleteItem }) => {
  // console.log(filter);
  return (
    <UserList>
      {filter.map(({ name, number, id }) => (
        <UserName key={id}>
          <span>
            {name}:{number}
          </span>
          <button type="button" onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </UserName>
      ))}
    </UserList>
  );
};

export default User;

User.propTypes = {
  filter: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteItem: propTypes.func.isRequired,
};
