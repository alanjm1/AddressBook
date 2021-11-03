import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import "./person-name.scss";

function PersonName(props) {
	return (
		<Row className="person-name mt-5" id="person-name">
			<Col
				lg={{ span: 2 }}
				sm={{ span: 4 }}
				xs={{ span: 12 }}
				className="person-image-column"
			>
				<img
					className="person-avatar"
					alt={props.person.name}
					src={props.person.imageUrl}
					title={"Picture of " + props.person.name}
				></img>
			</Col>
			<Col
				className="person-detail-name mt-5"
				data-testid="person-detail-name"
			>
				{props.person.name}
			</Col>
		</Row>
	);
}

PersonName.propTypes = {
	person: PropTypes.object.isRequired,
};

export default PersonName;
