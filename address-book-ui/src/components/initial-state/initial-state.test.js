import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import InitialState from "./initial-state";

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

describe("Initial State component", () => {
	it("renders without crashing", () => {
		render(
			<BrowserRouter>
				<InitialState></InitialState>
			</BrowserRouter>,
			container
		);
	});
});
