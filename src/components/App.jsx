import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import Counter from './Counter/Counter';
import errorImage from '../images/homer-simpson-dialing.gif';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

import { selectError, selectIsLoading } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      {isLoading && (
        <p>
          <div className={css.loaderContainer}>
            <p className={css.loader}></p>
            <h4>Loading contacts...</h4>
          </div>
        </p>
      )}
      {error && (
        <div>
          <p className={css.error}>Error: {error}</p>
          <img className={css.errorImage} src={errorImage} alt="Error" />
          <p className={css.errorMessage}>
            We are sorry, we couldn't find your contacts...
          </p>
        </div>
      )}
      {!isLoading && !error && (
        <div>
          <h2>Contact List</h2>
          <Counter />
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default App;
