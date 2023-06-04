import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CreateLog = () => {
	const navigate = useNavigate();
	return (
		<div className="page create-log-page">
			<Navbar></Navbar>
			<h1>
				{new Date().toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</h1>
			<div className="feeling">
				<h2>I'm feeling </h2>
				<input type="text" placeholder="happy" />
			</div>
			<textarea placeholder="What happened today..."></textarea>

			<button
				onClick={() => {
					navigate("/logs");
				}}
				className="save-button button"
			>
				Save
			</button>
		</div>
	);
};

export default CreateLog;
