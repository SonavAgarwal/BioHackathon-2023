import React, { useEffect } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import QuackGPTLogo from "../assets/QuackGPTLogo.png";

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	// if user is not logged in then navigate to /auth
	useEffect(() => {
		if (!loading && !user) {
			navigate("/auth");
		}
	}, [user, loading, navigate]);

	return (
		<div className="navbar">
			{/* logo, settings, and logout button */}

			<Link to="/" className="home-button">
				Home
			</Link>
			<div className="spacer"></div>
			<img className="navbar-logo" src={QuackGPTLogo} alt="QuackGPT Logo" />
			<div className="spacer"></div>
			<button className="logout-button" onClick={() => signOut(auth)}>
				Logout
			</button>
		</div>
	);
};

export default Navbar;
