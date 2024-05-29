import React from 'react';
import { useSelector } from 'react-redux';
import css from './Counter.module.css';
import { selectContacts } from '../../redux/selectors';

const Counter = () => {
  const items = useSelector(selectContacts);
  return (
    <div className={css.container}>
      <h4 className={css.total}>Total Contacts: {items.length}</h4>
    </div>
  );
};

export default Counter;
