import React from "react";
import { buttonProps } from "../interfaces/interfaces";
import "../assets/styles/buttonComponentStyles.css";

export default function ButtonComponent({
	buttonContent,
	buttonIcon,
	buttonColor,
	buttonTextColor,
}: buttonProps) {
	return (
		<button
			onClick={() => alert(buttonContent)}
			style={{ backgroundColor: buttonColor, color: buttonTextColor }}
			className="mainButton"
		>
			{buttonContent}
		</button>
	);
}
