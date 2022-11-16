import React from "react";

export const ProgressBar = ({ progress }) => {
	const stroageSpace = {
		height: "10px",
		width: "100%",
		background: "#ffffff",
		borderRadius: "10px",

		display: "block",
	};

	const storageUsed = {
		height: "100%",
		width: `${progress}%`,
		backgroundColor: "#4042D0",
		borderRadius: 40,
		textAlign: "right",
	};

	return (
		<div style={stroageSpace}>
			<div style={storageUsed}></div>
		</div>
	);
};
