import React from 'react'
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo';
import GetInTouch from '../GetInTouch/GetInTouch';

function Navbar() {
  return (
    <div className={styles.header}>
    <div className={styles.links_container}>

  <Logo/>
      <Link to="/" className={styles.home}>Home</Link>
      <Link to="/Destinations" className={styles.destinations}>Destinations</Link>
<GetInTouch/>
    </div>
  </div>
  )
}

export default Navbar