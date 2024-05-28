import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
