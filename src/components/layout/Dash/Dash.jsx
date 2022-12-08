import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalStore } from "../../../contexts/GlobalStore";
import { Button } from "../../shared/Button/Button";
import { SearchInput } from "../../shared/Search/SearchInput";
import { FaBars } from "react-icons/fa";
import styles from "./Dash.module.css";

export const Dash = ({ show }) => {
  const { handleImageChange } = useGlobalStore();

  return (
    <div className={styles.dash_wrapper}>
      <div className={styles.dash_head}>
        <FaBars className={styles.menu} onClick={() => show()} />
        <div className={styles.dash_header}>
          <SearchInput />
          <Button onChange={handleImageChange} />
        </div>
      </div>

      <div className={styles.dash_body}>
        <Outlet />
      </div>
    </div>
  );
};
