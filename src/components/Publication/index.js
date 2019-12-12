import React from 'react';
import PropTypes from 'prop-types';
import s from './Publication.module.css';

const Publication = ({ text, article }) => (
  <>
    <h2 className={s.publication_h2}>{text}</h2>
    <p className={s.publication_p}>{article}</p>
  </>
);

Publication.propTypes = PropTypes.shape({
  text: PropTypes.string,
  article: PropTypes.string,
}).isRequired;

export default Publication;
