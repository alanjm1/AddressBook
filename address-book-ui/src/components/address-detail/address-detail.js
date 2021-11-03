import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import PersonName from "../person-name/person-name";
import Education from "../education/education";
import WorkExperience from "../work-experience/work-experience";
import apiConfig from "../../api-config.json";

function AddressDetail(props) {
	const [person, setPerson] = useState({});

	// This will be called any time the route param 'id' changes and will
	// refresh the data.
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				apiConfig.peopleEndpoint + "/" + props.match.params.id
			);
			await response.json().then((person) => {
				setPerson(person);
			});
		}
		fetchData();
	}, [props.match.params.id]);

	return (
		<Container className="address-detail" id="address-detail" fluid>
			<PersonName person={person} />
			<Education person={person} />
			<WorkExperience person={person} />
		</Container>
	);
}

AddressDetail.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	}),
};

export default AddressDetail;
