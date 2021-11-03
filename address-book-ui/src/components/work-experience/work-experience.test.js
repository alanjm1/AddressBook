import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import WorkExperience from "./work-experience";

const person = {
	name: "John Doe",
	workExperience: [
		{
			institution: "Megacorp",
			title: "Software Engineer",
			startYear: "2016",
		},
	],
};

const personWithEndYear = {
	name: "John Doe",
	workExperience: [
		{
			institution: "Megacorp",
			title: "Software Engineer",
			startYear: "2016",
			endYear: "2021",
		},
	],
};

const personWithoutWorkExperience = {
	name: "Jane Doe",
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

describe("Work Experience component", () => {
	it("renders without crashing", () => {
		render(
			<BrowserRouter>
				<WorkExperience person={person}></WorkExperience>
			</BrowserRouter>,
			container
		);
	});

	it("Renders work experience fields for selected person", async () => {
		render(
			<BrowserRouter>
				<WorkExperience person={person}></WorkExperience>
			</BrowserRouter>,
			container
		);

		expect(
			screen.getByTestId("work-experience-institution").textContent
		).toBe("Megacorp");

		expect(screen.getByTestId("work-experience-title").textContent).toBe(
			"Software Engineer"
		);

		expect(screen.getByTestId("work-experience-duration").textContent).toBe(
			"2016 - Present"
		);
	});

	it("Renders 'No work experience to show' where there is no work experience object for the person", async () => {
		render(
			<BrowserRouter>
				<WorkExperience
					person={personWithoutWorkExperience}
				></WorkExperience>
			</BrowserRouter>,
			container
		);

		expect(
			screen.queryByText("No work experience to show")
		).toBeInTheDocument();
	});

	it("Renders an 'end year' if one was provided", () => {
		render(
			<BrowserRouter>
				<WorkExperience person={personWithEndYear}></WorkExperience>
			</BrowserRouter>,
			container
		);

		expect(screen.getByTestId("work-experience-duration").textContent).toBe(
			"2016 - 2021"
		);
	});
});
