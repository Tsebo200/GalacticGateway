import React from 'react';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <>
    <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
    </div>
    </>
  )
}

export default Logo