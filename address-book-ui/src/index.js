import React from "react";
import ReactDOM from "react-dom";
import AddressBook from "./components/address-book/address-book";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AddressBook />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
