import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import FAQ from "./pages/FAQ.jsx";
import Chat from "./pages/Chat.jsx";
import CreateLog from "./pages/CreateLog.jsx";
import Logs from "./pages/Logs.jsx";
import Results from "./pages/Results.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/auth",
		element: <Auth />,
	},
	{
		path: "/faq",
		element: <FAQ />,
	},
	{
		path: "/chat",
		element: <Chat />,
	},
	{
		path: "/newlog",
		element: <CreateLog />,
	},
	{
		path: "/logs",
		element: <Logs />,
	},
	{
		path: "/results",
		element: <Results />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
