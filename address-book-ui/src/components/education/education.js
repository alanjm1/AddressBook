import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import "./education.scss";

function Education(props) {
	return (
		<Row className="education mt-4" id="education">
			<Col>
				<Row className="mb-2">
					<Col className="sub-heading" id="education-heading">
						Education
					</Col>
				</Row>
				{props.person.education ? (
					props.person.education.map((education, index) => {
						return (
							<Row key={index}>
								<Col>
									<Row>
										<Col>
											<b data-testid="education-institution">
												{education.institution}
											</b>
										</Col>
									</Row>
									<Row>
										<Col data-testid="education-degree">
											{education.degree}
										</Col>
									</Row>
									<Row>
										<Col data-testid="education-duration">
											{education.startYear} -{" "}
											{education.endYear}
										</Col>
									</Row>
								</Col>
							</Row>
						);
					})
				) : (
					<Row>
						<Col>No education to show</Col>
					</Row>
				)}
			</Col>
		</Row>
	);
}

Education.propTypes = {
	person: PropTypes.shape({ education: PropTypes.array }),
};

export default Education;
