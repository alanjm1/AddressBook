import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AddressBook from "./address-book";

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe("address book component", () => {
	it("renders the initial state component on the initial route", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<AddressBook></AddressBook>
			</MemoryRouter>,
			container
		);

		expect(
			screen.queryByText("Welcome to your address book!")
		).toBeInTheDocument();
	});
});
