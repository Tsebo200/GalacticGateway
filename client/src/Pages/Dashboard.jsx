import React from "react";
import NavBar from "../Components/NavBar";
// import Carousel from "../Components/Carousel";
import styles from "../Pages/Dashboard.module.scss";
function Dashboard() {
  return (
    <>
      <NavBar />
      {/* <div className={styles.container}> */}
      <div className={styles.dashboard}>
          <div className={styles.image_container}>
            <h1> Tired Of Global Warning?</h1>
            <p> Visit A Different Planet</p>
          </div>
      </div>
        {/* <Carousel /> */}
      {/* </div> */}
      <div> Dashboard </div>
    </>
  );
}

export default Dashboard;
