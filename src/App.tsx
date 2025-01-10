import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import React from "react";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="/:to" element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
