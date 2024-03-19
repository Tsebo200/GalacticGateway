import React from 'react'
import NavBar from '../Components/NavBar'
import Carousel from '../Components/Carousel'
import styles from '../Pages/Dashboard.module.scss'
function Dashboard() {
  return (
    <>
    <NavBar/>
    <div className={styles.container}><Carousel/></div>
    <div> Dashboard </div>
    </>
  )
}

export default Dashboard