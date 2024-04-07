import React from "react";
import NavBar from "../Components/NavBar";
import styles from "../Pages/Contact.module.scss";


function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.google_earth_flexcontainer}>
        <div className={styles.earth_location_image}></div>
      </div>
      <Contact/>
      <div> Contact</div>
    </>
  );
}

export default Contact;
