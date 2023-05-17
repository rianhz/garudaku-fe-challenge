import React from "react";
import { ReactComponent as Logo } from "../../logos/logoipsum-243.svg";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link to="/">
					<Logo />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
