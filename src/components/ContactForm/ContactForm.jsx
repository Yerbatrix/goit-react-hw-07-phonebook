import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '' || phone.trim() === '') return;

    const isDuplicate = contacts.some(contact => contact.name === name);
    if (isDuplicate) {
      alert('Contact with this name already exists!');
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">
          Name
          <input
            type="text"
            name="name"
            id="nameInput"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </label>
        <label htmlFor="phoneInput">
          Phone number
          <input
            type="tel"
            name="phone"
            id="phoneInput"
            pattern="^[0-9]{1,3}[-\s]?[0-9]{1,14}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
