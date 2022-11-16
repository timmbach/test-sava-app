import React from "react";

export const CaretIcon = ({ status }) => {
	return (
		<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.949219 1.08004L7.46922 7.60004C8.23922 8.37004 8.23922 9.63004 7.46922 10.4L0.949219 16.92"
				stroke={status === "active" ? "#FEFEFE" : "#111315"}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
