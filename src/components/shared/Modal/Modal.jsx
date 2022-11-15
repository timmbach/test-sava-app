import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ title, text, action1, action2 }) => {
	return (
		<div className={styles.modal_wrapper}>
			<div className={styles.modal}>
				<div className={styles.modal_text}>
					<h4>{title || "Allow Sava use your Location?"}</h4>
					<p>{text || "We would use your location in sorting and organizing your images and memories."}</p>
				</div>

				<div className={styles.modal_actions}>
					<button className={styles.modal_btn}>{action1 || "don't allow"}</button>
					<button className={styles.modal_btn}>{action2 || "allow"}</button>
				</div>
			</div>
		</div>
	);
};
