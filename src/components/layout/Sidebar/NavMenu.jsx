import React, { useState } from "react";
import { SubNav } from "./SubNav/SubNav";
import styles from "./Sidebar.module.css";
import { CaretDown, CaretIcon } from "../../../assets/svg";
import { Link } from "react-router-dom";

export const NavMenu = ({ status, id, href, Icon, title, subnav, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setIsOpen(true);
  };

  const removeNav = () => {
    setIsOpen(false);
  };

  const showBar = () => {
    if (window.innerWidth <= 500) {
      return show();
      // console.log("okay");
    } else {
      return null;
      // console.log("okay1");
    }
  };

  return (
    <li
      onClick={() => showBar()}
      className={styles.nav_list_item}
      onMouseEnter={subnav ? showNav : null}
      onMouseLeave={subnav ? removeNav : null}
    >
      <Link
        to={href}
        className={`${styles.nav_list} ${
          status === "active" ? styles.active : null
        }`}
      >
        {/* main category */}
        <div className={styles.nav_items}>
          {<Icon status={status} />}
          <h5 className={styles.nav_title}>{title}</h5>
          {subnav && (isOpen ? <CaretDown /> : <CaretIcon />)}
        </div>

        {/* sub category */}
        {isOpen && <SubNav />}
      </Link>
    </li>
  );
};
