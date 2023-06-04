import React from "react";

import log1 from "../assets/data/log1.json";
import log2 from "../assets/data/log2.json";
import log3 from "../assets/data/log3.json";
import Navbar from "../components/Navbar";

const logs = [log1, log2, log3];

const Logs = () => {
	return (
		<div className="page">
			<Navbar></Navbar>
			{logs.map((log, index) => {
				return <Log log={log} key={index} />;
			})}
		</div>
	);
};

const Log = ({ log }) => {
	return (
		<div className="log">
			<h1>
				{log.date}: <span>{log.mood}</span>
			</h1>
			{log.text && <p>{log.text}</p>}
		</div>
	);
};

export default Logs;
