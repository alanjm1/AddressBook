import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { JournalText } from "react-bootstrap-icons";
import "./initial-state.scss";

function InitialState() {
	return (
		<Container className="initial-state" id="initial-state">
			<Row className="mt-4">
				<Col className="welcome-banner text-center">
					Welcome to your address book!
				</Col>
			</Row>
			<Row>
				<Col className="welcome-icon text-center">
					<JournalText />
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className=" text-center">
					Select a person from the left to view their details
				</Col>
			</Row>
		</Container>
	);
}

export default InitialState;
