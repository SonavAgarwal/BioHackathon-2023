import React, { useState } from "react";
import chat1 from "../assets/data/chat1.json";
import chat2 from "../assets/data/chat2.json";
import chat3 from "../assets/data/chat3.json";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const chats = [chat1, chat2, chat3];

const Chat = () => {
	const [messageIndex, setMessageIndex] = useState(0);

	const [chat] = useState(chats[Math.floor(Math.random() * chats.length)]);

	function showNextMessage() {
		setMessageIndex((messageIndex) =>
			Math.min(messageIndex + 1, chat.messages.length)
		);

		// scroll to bottom of page
		setTimeout(() => {
			window.scrollTo(0, document.body.scrollHeight);
		}, 100);

		setTimeout(() => {
			setMessageIndex((messageIndex) =>
				Math.min(messageIndex + 1, chat.messages.length)
			);
			setTimeout(() => {
				window.scrollTo(0, document.body.scrollHeight);
			}, 100);
		}, 1000);
	}

	return (
		<div className="page">
			<Navbar></Navbar>
			{/* <h1>Chat</h1> */}
			{chat.messages.map(
				(chat, index) =>
					index <= messageIndex && (
						<div
							key={index}
							className={
								"message " +
								(chat.sender === "AI" ? "ai-message" : "person-message")
							}
						>
							{chat.sender}: {chat.text}
						</div>
					)
			)}

			{/* button titled speak and on click it shows the next message */}

			{messageIndex >= chat.messages.length - 1 ? (
				// link that navigates to results page
				<Link to="/results" className="results-button">
					See Treatments
				</Link>
			) : (
				<button className="speak-button" onClick={showNextMessage}>
					Speak
				</button>
			)}
		</div>
	);
};

export default Chat;
