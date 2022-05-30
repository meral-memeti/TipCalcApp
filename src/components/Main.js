import React from 'react';
import styles from './styles.module.scss';
import {Calculator} from './calculator/index'

export const Main = () => {

  return (
    <div className={styles.main}>
      <img src="./images/logo.svg" alt="logo" />
      <Calculator />
    </div>
  );
};
