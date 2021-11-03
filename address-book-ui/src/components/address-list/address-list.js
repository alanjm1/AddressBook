import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { SortAlphaUp, SortAlphaDown } from "react-bootstrap-icons";
import apiConfig from "../../api-config.json";
import "./address-list.scss";

function AddressList() {
	const [searchTerm, setSearchTerm] = useState("");
	const [people, setPeople] = useState([]);
	const [sortInReverse, setSortInReverse] = useState(false);

	const toggleSortOrder = () => {
		// this determines the sort icon that is shown on the UI
		setSortInReverse(!sortInReverse);
		setPeople(sortPeopleAlphabetically(people, !sortInReverse));
	};

	// function takes in a list of people, and a flag to indicate
	// if it should be sorted in forward or reverse order
	const sortPeopleAlphabetically = (people, sortInReverse) => {
		var sortedPeople = people.sort((a, b) =>
			sortInReverse
				? b.name.localeCompare(a.name)
				: a.name.localeCompare(b.name)
		);
		return sortedPeople;
	};

	// This will run once and fetch data when the component initially mounts
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(apiConfig.peopleEndpoint);
			await response.json().then((json) => {
				setSortInReverse(false);
				setPeople(sortPeopleAlphabetically(json.people, false));
			});
		}
		fetchData();
	}, []);

	return (
		<Container className="address-list" id="address-list" fluid>
			<Row className="address-list-heading mt-4 mb-2">
				<Col>
					<Form.Control
						id="search-field"
						data-testid="search-field"
						as="input"
						placeholder="Search..."
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</Col>
			</Row>
			<Row className="address-list-heading mt-2 mb-2">
				<Col>
					Directory{" "}
					{sortInReverse ? (
						<SortAlphaUp
							className="sort-directory-icon"
							id="sort-up"
							data-testid="sort-up"
							onClick={() => toggleSortOrder()}
						/>
					) : (
						<SortAlphaDown
							className="sort-directory-icon"
							id="sort-down"
							data-testid="sort-down"
							onClick={() => toggleSortOrder()}
						/>
					)}
				</Col>
			</Row>
			{people.map((person, index) => {
				// Filter the list by name. Converts both to lowercase so it is not case-sensitive
				return searchTerm === "" ||
					person.name
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ? (
					<Row key={index} className="address-entry">
						<Col>
							<NavLink
								id="address-entry-link"
								to={"/person/" + person.id}
							>
								<p data-testid="person-name">{person.name}</p>
							</NavLink>
						</Col>
					</Row>
				) : null;
			})}
		</Container>
	);
}

export default AddressList;
