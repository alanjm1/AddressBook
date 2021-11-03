import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddressList from "./address-list";

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

const people = {
	people: [
		{
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

			workExperience: [
				{
					institution: "Megacorp",
					startYear: 2001,
					title: "Software Developer",
				},
			],

			imageUrl: "/images/avatar1.svg",
		},
		{
			id: "1",
			name: "Joe Manfrey",
			education: [
				{
					institution: "Clemson University",
					startYear: 1990,
					endYear: 1995,
					degree: "Bachelor's, Computer Science",
				},
			],

			workExperience: [
				{
					institution: "Food Inc.",
					startYear: 1998,
					title: "Software Developer",
				},
			],

			imageUrl: "/images/avatar2.svg",
		},
		{
			id: "2",
			name: "Douglas Cho",
			education: [
				{
					institution: "University of NC, Chapel Hill",
					startYear: 1990,
					endYear: 1995,
					degree: "Marketing",
				},
			],

			workExperience: [
				{
					institution: "Food Inc.",
					startYear: 1998,
					title: "Software Developer",
				},
			],

			imageUrl: "/images/avatar3.svg",
		},
		{
			id: "3",
			name: "Allison Murray",
			education: [
				{
					institution: "University of Southern California",
					startYear: 2001,
					endYear: 2005,
					degree: "Sociology",
				},
			],

			workExperience: [
				{
					institution: "United Products",
					startYear: 1998,
					title: "Directory of IT",
				},
			],

			imageUrl: "/images/avatar4.svg",
		},
	],
};

describe("Address List component", () => {
	it("renders without crashing", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve(people) })
		);
		await act(async () => {
			render(
				<BrowserRouter>
					<AddressList></AddressList>
				</BrowserRouter>,
				container
			);
		});
	});

	it("renders names in alphabetical order", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve(people) })
		);
		await act(async () => {
			render(
				<BrowserRouter>
					<AddressList />
				</BrowserRouter>,
				container
			);
		});

		await waitFor(() => {
			expect(screen.queryAllByTestId("person-name")[0].textContent).toBe(
				"Adam Wright"
			);
		});
	});

	it("filters the list based on search field input", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve(people) })
		);
		await act(async () => {
			render(
				<BrowserRouter>
					<AddressList />
				</BrowserRouter>,
				container
			);
		});

		act(() => {
			const searchField = screen.getByTestId("search-field");
			fireEvent.change(searchField, { target: { value: "Joe" } });
		});

		await waitFor(() => {
			expect(screen.queryAllByTestId("person-name")[0].textContent).toBe(
				"Joe Manfrey"
			);
		});
	});

	it("changes sort order to alphabetical when sort icon is clicked", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve(people) })
		);

		await act(async () => {
			render(
				<BrowserRouter>
					<AddressList />
				</BrowserRouter>,
				container
			);
		});

		act(() => {
			const sortIconDown = screen.getByTestId("sort-down");
			fireEvent.click(sortIconDown);
		});

		act(() => {
			const sortIconUp = screen.getByTestId("sort-up");
			fireEvent.click(sortIconUp);
		});

		await waitFor(() => {
			expect(screen.queryAllByTestId("person-name")[0].textContent).toBe(
				"Adam Wright"
			);
		});
	});

	it("changes sort order to reverse alphabetical when sort icon is clicked", async () => {
		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({ json: () => Promise.resolve(people) })
		);

		await act(async () => {
			render(
				<BrowserRouter>
					<AddressList />
				</BrowserRouter>,
				container
			);
		});

		act(() => {
			const sortIconDown = screen.getByTestId("sort-down");
			fireEvent.click(sortIconDown);
		});

		expect(screen.getByTestId("sort-up")).toBeInTheDocument();
		expect(screen.getAllByTestId("person-name")[0].textContent).toBe(
			"Joe Manfrey"
		);
	});
});
