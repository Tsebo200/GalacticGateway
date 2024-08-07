import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import styles from './Dashboard.module.scss';

function Dashboard() {
  return (
<>

  <div className={styles.dashboardBackground}>
  <Navbar/>
  </div>

    </>
  )
}

export default Dashboard