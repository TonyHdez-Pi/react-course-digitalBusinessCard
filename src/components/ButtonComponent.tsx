import React from "react";
import { buttonProps } from "../interfaces/buttonInterface";
import "../assets/styles/buttonComponentStyles.css";
export default function ButtonComponent({
	buttonContent,
	buttonIcon,
}: buttonProps) {
	return <button className="mainButton">{buttonContent}</button>;
}
