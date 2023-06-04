import React from "react";
import Navbar from "../components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {JSON.stringify(error)}</div>;
	}

	return (
		<div className="page home-page">
			<Navbar></Navbar>
			<h1>Hello {user?.displayName}</h1>
			<h2>Manage your health</h2>
			<Link className="button" to={"/chat"}>
				Get Evaluation
			</Link>
			<Link className="button" to={"/results"}>
				Previous Results
			</Link>
			<h2>Record your feelings</h2>
			<Link className="button" to={"/newlog"}>
				New Log
			</Link>
			<Link className="button" to={"/logs"}>
				Feelings Log
			</Link>
		</div>
	);
};

export default Home;
