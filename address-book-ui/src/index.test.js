import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import AddressBook from "./components/address-book/address-book";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe("Person Name component", () => {
	it("renders without crashing", () => {
		render(
			<React.StrictMode>
				<BrowserRouter>
					<AddressBook></AddressBook>
				</BrowserRouter>
			</React.StrictMode>,
			container
		);
	});
});
