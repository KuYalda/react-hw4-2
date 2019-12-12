import React from 'react';
import PropTypes from 'prop-types';
import s from './Counter.module.css';

const Counter = ({ actualValue, maxValue }) => (
  <p className={s.counter}>
    {actualValue}/{maxValue}
  </p>
);

Counter.propTypes = PropTypes.objectOf(PropTypes.namber).isRequired;

export default Counter;
