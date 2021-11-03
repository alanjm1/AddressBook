import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Education from "./education";

const person = {
	name: "Alan Maher",
	education: [
		{
			institution: "I.T Carlow",
			degree: "BSc Software Development",
			startYear: "2013",
			endYear: "2016",
		},
	],
};

const personWithoutEducation = {
	name: "John Doe",
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

describe("Education component", () => {
	it("renders without crashing", () => {
		render(
			<BrowserRouter>
				<Education person={person}></Education>
			</BrowserRouter>,
			container
		);
	});

	it("Renders education fields for selected person", () => {
		render(
			<BrowserRouter>
				<Education person={person}></Education>
			</BrowserRouter>,
			container
		);

		expect(screen.queryByTestId("education-institution").textContent).toBe(
			"I.T Carlow"
		);

		expect(screen.queryByTestId("education-degree").textContent).toBe(
			"BSc Software Development"
		);

		expect(screen.queryByTestId("education-duration").textContent).toBe(
			"2013 - 2016"
		);
	});

	it("Renders 'No education to show' where there is no education object for the person", () => {
		render(
			<BrowserRouter>
				<Education person={personWithoutEducation}></Education>
			</BrowserRouter>,
			container
		);

		expect(screen.queryByText("No education to show")).toBeInTheDocument();
	});
});
