import React from "react";
import "../assets/styles/bottomNavStyles.css";
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillInstagram,
	AiFillFacebook,
} from "react-icons/ai";

export default function BottomNav() {
	return (
		<div className="mainContainer">
			<AiFillLinkedin className="icon" size={30} />
			<AiFillGithub className="icon" size={30} />
			<AiFillInstagram className="icon" size={30} />
			<AiFillFacebook className="icon" size={30} />
		</div>
	);
}
