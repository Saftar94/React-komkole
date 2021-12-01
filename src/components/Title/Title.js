import PropTypes from 'prop-types';
import React from 'react';
import styles from './Title.module.scss';

const list = ['js', 'python', 'react', 'Sass'];

export const Title = ({ number }) => {
  return (
    <>
      {number === 37 && <h3>True Number</h3>}
      <h1 className={styles.Title}> Hello Worls {number} </h1>
      <ul>
        {list.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </>
  );
};

Title.propTypes = {
  number: PropTypes.number,
};
