import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AddressDetail from "./address-detail";

const person = {
	id: "0",
	name: "Adam Wright",
	education: [
		{
			institution: "NC State University",
			startYear: 2001,
			endYear: 2004,
			degree: "Bachelor's, Computer Science",
		},
	],
};

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

describe("address detail component", () => {
	it("renders without crashing", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(person),
			})
		);
		await act(async () => {
			render(
				<MemoryRouter initialEntries={["/person/0"]}>
					<Route path="/person/:id" component={AddressDetail} />
				</MemoryRouter>,
				container
			);
		});
	});

	it("renders person name component and displays name", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(person),
			})
		);
		await act(async () => {
			render(
				<MemoryRouter initialEntries={["/person/0"]}>
					<Route path="/person/:id" component={AddressDetail} />
				</MemoryRouter>,
				container
			);
		});

		expect(screen.getByTestId("person-detail-name").textContent).toBe(
			"Adam Wright"
		);
	});
});
