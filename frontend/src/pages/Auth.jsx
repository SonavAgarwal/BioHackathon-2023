import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import QuackGPTLogo from "../assets/QuackGPTLogo.png";

const provider = new GoogleAuthProvider();

const Auth = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		if (!loading && user) {
			navigate("/");
		}
	}, [user, loading, navigate]);

	useEffect(() => {
		// get quote
		fetch("https://api.quotable.io/random")
			.then((response) => response.json())
			.then((data) => {
				setQuote(data.content);
				setAuthor(data.author);
			});
	}, []);

	return (
		<div className="page auth-page">
			<img src={QuackGPTLogo} alt="QuackGPT Logo" />
			<h1>QuackGPT</h1>

			<GoogleButton
				className="auth-button"
				onClick={() => signInWithRedirect(auth, provider)}
			/>

			<h2>Quote of the day:</h2>
			<p>
				{quote} - {author}
			</p>
		</div>
	);
};

export default Auth;
