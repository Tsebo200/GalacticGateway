import React from 'react'
import styles from '../Components/Navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.header}>
   <div className={styles.links_container}>
            <Link to="/Home">Logo</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Destination">Destination</Link>
            <Link to="/Getapp">Getapp</Link>
            </div>
</div>
  )
}

export default Navbar