import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Logo from "../../../assets/svg/logo.svg";
import UserImage from "../../../assets/userAvatar.png"
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
			<nav className={styles.nav_wrapper}>
				<img src={Logo} alt="logo" className={styles.logo} />

				<ul className={styles.nav_list_wrapper}>
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

			<div className={styles.user_wrapper}>
				<div className={styles.user_details}>
					<span className={styles.user_img}>
						<img src={UserImage} alt="" />
					</span>
					<p>Toni Davies</p>
				</div>

				<div className={styles.storage_details}>
					<small className={styles.storage_text}>500mb of 5GB used</small>
					<span className={styles.storage_space}></span>
				</div>
			</div>
		</div>
	);
};
