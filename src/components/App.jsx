import React from 'react';
import Form from './Form/Form';
import User from './User/User';
import { Filter } from './Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parceContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parceContacts) {
      this.setState({ contacts: parceContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const checkContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    return checkContact
      ? alert('такое имя уже есть')
      : this.setState({ contacts: [...this.state.contacts, data] });
  };

  hendlerFilterChange = inputSearch => {
    this.setState({ filter: inputSearch });
    this.filteredName();
  };

  filteredName = () => {
    const { contacts, filter } = this.state;
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterName;
  };

  deleteitem = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    // console.log(this.state.contacts);
    return (
      <div
        style={{
          width: '500px',
          padding: '20px',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          border: '2px solid #082911',
          borderRadius: '4px',
          backgroundColor: '#ebdeec',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <User
          events={this.state.contacts}
          filter={this.filteredName()}
          onDeleteItem={this.deleteitem}
        />
        <Filter onInput={this.hendlerFilterChange} />
      </div>
    );
  }
}
