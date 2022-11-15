import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Logo from "../../../assets/svg/logo.svg";
import { navData } from "./sidebarData";
import { CaretIcon } from "../../../assets/svg";
import { SubNav } from "./SubNav/SubNav";

export const Sidebar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<div className={styles.sidebar_wrapper}>
			<img src={Logo} alt="logo" className={styles.logo} />

			<nav>
				<ul className={styles.nav_wrapper}>
					{navData.map(({ status, id, Icon, title, href }) => (
						<li key={id} className={styles.nav_list_item}>
							<a href={href} className={`${styles.nav_list} ${status === "active" ? styles.active : null}`}>
								{/* main category */}
								<div className={styles.nav_items}>
									{<Icon status={status} />}
									<h5 className={styles.nav_title}>{title}</h5>
									{id === 2 ? <CaretIcon onMouseOver={handleClick} /> : null}
								</div>

								{/* sub category */}
								{active && <SubNav />}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
