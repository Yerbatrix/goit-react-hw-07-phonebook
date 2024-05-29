import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <p>
          <span className={css.loader}>Loading contacts...</span>
        </p>
      )}
      {error && <p className={css.error}>Error: {error}</p>}
      {!isLoading && !error && (
        <div>
          <h2>Contact List</h2>
          <p>Total Contacts: {items.length}</p>
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default App;
