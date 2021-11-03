import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import "./work-experience.scss";

function WorkExperience(props) {
	return (
		<Row className="work-experience mt-4 mb-4" id="work-experience">
			<Col>
				<Row className="mb-2">
					<Col className="sub-heading">Work Experience</Col>
				</Row>
				{props.person.workExperience ? (
					props.person.workExperience.map((experience, index) => {
						return (
							<Row key={index}>
								<Col>
									<Row>
										<Col>
											<b data-testid="work-experience-institution">
												{experience.institution}
											</b>
										</Col>
									</Row>
									<Row>
										<Col data-testid="work-experience-title">
											{experience.title}
										</Col>
									</Row>
									<Row>
										<Col data-testid="work-experience-duration">
											{experience.startYear} -
											{experience.endYear
												? " " + experience.endYear
												: " Present"}
										</Col>
									</Row>
								</Col>
							</Row>
						);
					})
				) : (
					<Row>
						<Col>No work experience to show</Col>
					</Row>
				)}
			</Col>
		</Row>
	);
}

WorkExperience.propTypes = {
	person: PropTypes.shape({ workExperience: PropTypes.array }),
};

export default WorkExperience;
