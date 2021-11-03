import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AddressList from "../address-list/address-list";
import InitialState from "../initial-state/initial-state";
import PersonDetail from "../address-detail/address-detail";
import "./address-book.scss";

function AddressBook() {
	return (
		<Container className="address-book" id="address-book" fluid>
			<Row>
				<Col
					lg={{ span: 3 }}
					md={{ span: 3 }}
					sm={{ span: 4 }}
					xs={{ span: 6 }}
					className="address-list-column"
				>
					<AddressList></AddressList>
				</Col>
				<Col>
					<Switch>
						<Route path="/" component={InitialState} exact></Route>
						<Route
							path="/person/:id"
							component={PersonDetail}
						></Route>
					</Switch>
				</Col>
			</Row>
		</Container>
	);
}

export default AddressBook;
