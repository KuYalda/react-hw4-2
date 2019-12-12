import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ value, handleClick, stop }) => (
  <button
    onClick={handleClick}
    type="button"
    className={!stop ? s.button : s.button_disabled}
  >
    {value}
  </button>
);

Controls.propTypes = PropTypes.shape({
  value: PropTypes.string,
  stop: PropTypes.bool,
  handleClick: PropTypes.func,
}).isRequired;

export default Controls;
