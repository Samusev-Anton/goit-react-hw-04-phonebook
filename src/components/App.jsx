// import Form from './Form/Form';
import Form2 from './Form/Form2';
import User from './User/User';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parcedContacts = JSON.parse(savedContacts);
      return parcedContacts;
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    return checkContact
      ? alert('такое имя уже есть')
      : setContacts([...contacts, data]);
  };

  const hendlerFilterChange = inputSearch => {
    setFilter(inputSearch);
    filteredName();
  };

  const filteredName = () => {
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterName;
  };

  const deleteitem = id => {
    console.log(id);
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

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
      <Form2 onSubmit={formSubmitHandler} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <User
        events={contacts}
        filter={filteredName()}
        onDeleteItem={deleteitem}
      />
      <Filter onInput={hendlerFilterChange} />
    </div>
  );
};
