import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PersonName from "./person-name";
import { screen, render } from "@testing-library/react";

const person = {
	name: "Alan Maher",
	imageUrl: "/images/avatar1.svg",
};

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
			<BrowserRouter>
				<PersonName person={person}></PersonName>
			</BrowserRouter>,
			container
		);
	});

	it("Renders name for selected person", () => {
		render(
			<BrowserRouter>
				<PersonName person={person}></PersonName>
			</BrowserRouter>,
			container
		);

		expect(screen.getByTestId("person-detail-name").textContent).toBe(
			"Alan Maher"
		);
	});
});
