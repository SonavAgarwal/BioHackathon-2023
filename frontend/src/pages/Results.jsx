import React, { useEffect } from "react";

import result1 from "../assets/data/result1.json";
import result2 from "../assets/data/result2.json";
import result3 from "../assets/data/result3.json";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function percentToColor(percentage) {
	// percentage should be a number between 0 and 100
	// 0% = green, 50% = yellow, 100% = red
	if (percentage < 25) {
		return "lightgreen";
	} else if (percentage < 75) {
		return "gold";
	} else {
		return "salmon";
	}
}
const results = [result1, result2, result3];

const Results = () => {
	// scroll to top of page on load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="page results-page">
			<Navbar />

			{results.map((result, index) => (
				<ResultCard result={result} key={index}></ResultCard>
			))}
		</div>
	);
};

const ResultCard = ({ result }) => {
	return (
		<div className="result-card">
			<div></div>
			<h1>Results from {result.date}</h1>
			<h2>Causes</h2>
			{result.causes.map((cause, index) => (
				<div className="cause" key={index}>
					<div className="cause-info">
						<h3 className="cause-name">{cause.name}</h3>
						<h3 className="cause-amount">{cause.amount}%</h3>
					</div>

					<div
						className="cause-bar"
						style={{
							width: cause.amount + "%",
							backgroundColor: percentToColor(cause.amount),
						}}
					></div>
				</div>
			))}
			<h2>Treatments</h2>
			<ul>
				{result.treatments.map((treatment, index) => (
					<li className="treatment" key={index}>
						<h3 className="treatment-name">{treatment}</h3>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Results;
