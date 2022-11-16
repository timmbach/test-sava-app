import React from "react";
import styles from "./SearchInput.module.css";
import SearchIcon from "../../../assets/svg/searchIcon.svg"

export const SearchInput = () => {
	return (
    <div className={styles.search_wrapper}>
      <img src={SearchIcon} alt="" />

      <input type="text" className={styles.search_input} placeholder="Search Sava" />
		</div>
	);
};
