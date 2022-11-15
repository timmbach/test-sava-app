import React from "react";
import { Dash } from "./Dash/Dash";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={styles.layout_wrapper}>
			<Sidebar />
			<Dash />
		</div>
	);
};

export default Layout;
