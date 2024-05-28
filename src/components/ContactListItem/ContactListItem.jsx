import React from 'react';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.item}>
      <span className={css.name}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={css.button}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
