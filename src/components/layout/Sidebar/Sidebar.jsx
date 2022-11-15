import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "../../../assets/svg/logo.svg";
import UserImage from "../../../assets/userAvatar.png";
import { navData } from "./sidebarData";
import { NavMenu } from "./NavMenu";
import { ProgressBar } from "./ProgressBar";

export const Sidebar = () => {
	const URL = window.location.pathname;

	const getStatus = (url) => {
		// eslint-disable-next-line array-callback-return
		navData.map((item) => {
			if (url === item.href) {
				item.status = "active";
			} else {
				item.status = "inactive";
			}
			console.log(item.status);
		});
	};

	getStatus(URL);

	return (
		<div className={styles.sidebar_wrapper}>
			<nav className={styles.nav_wrapper}>
				<a href="/" className={styles.logo}>
					<img src={Logo} alt="logo" />
				</a>

				<ul className={styles.nav_list_wrapper}>
					{navData.map(({ status, id, Icon, title, href, subnav }) => (
						<NavMenu key={id} status={status} Icon={Icon} title={title} href={href} subnav={subnav} />
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
          
					<ProgressBar progress={30} />
				</div>
			</div>
		</div>
	);
};
