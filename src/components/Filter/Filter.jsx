import React from 'react';
import { InputStyle } from './Filter.styled';
// import propTypes from 'prop-types';

export class Filter extends React.Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value });
    this.props.onInput(event.currentTarget.value);
  };

  render() {
    return (
      <InputStyle htmlFor="">
        Filter
        <input
          type="text"
          value={this.state.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
        />
      </InputStyle>
    );
  }
}

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleInputChange: propTypes.func.isRequired,
// };
