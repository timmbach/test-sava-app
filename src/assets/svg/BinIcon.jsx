import React from "react";

export const BinIcon = ({ status }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
				stroke={
					status === "active" ? "#FEFEFE" : "#111315"
				}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
				stroke={
					status === "active" ? "#FEFEFE" : "#111315"
				}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.8504 9.13989L18.2004 19.2099C18.0904 20.7799 18.0004 21.9999 15.2104 21.9999H8.79039C6.00039 21.9999 5.91039 20.7799 5.80039 19.2099L5.15039 9.13989"
				stroke={
					status === "active" ? "#FEFEFE" : "#111315"
				}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.3301 16.5H13.6601"
				stroke={
					status === "active" ? "#FEFEFE" : "#111315"
				}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 12.5H14.5"
				stroke={
					status === "active" ? "#FEFEFE" : "#111315"
				}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
