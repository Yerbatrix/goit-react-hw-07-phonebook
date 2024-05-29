import React from 'react';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const formattedDate = format(
    new Date(contact.createdAt),
    'dd MMM yyyy, HH:mm'
  );

  return (
    <li className={css.item}>
      <div className={css.contactDetails}>
        <p className={css.name}>
          <strong>Name:</strong> {contact.name}
        </p>
        <p className={css.phone}>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p className={css.date}>
          <strong>Created At:</strong> {formattedDate}
        </p>
      </div>
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
