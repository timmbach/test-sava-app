import { React, useState } from "react";
import { Dash } from "./Dash/Dash";
import { Sidebar } from "./Sidebar/Sidebar";

import styles from "./Layout.module.css";

const Layout = () => {
  function show() {
    var bar = document.querySelector("#sidebar");
    if (bar.style.display === "none") {
      bar.style.display = "block";
    } else {
      bar.style.display = "none";
    }
  }
  return (
    <div className={styles.layout_wrapper}>
      <div id="sidebar" className={styles.sidebar}>
        <Sidebar show={show} />
      </div>
      <div className={styles.dash_layout}>
        <Dash show={show} />
      </div>
    </div>
  );
};

export default Layout;
