import React from "react";
import CustomerService from "../services/CustomerService";
import { Redirect, useParams } from "react-router-dom";

function LatestPurchase() {
	const { id } = useParams();

	const customer = CustomerService.getId(id);

	if (!customer) {
		return <Redirect to="/customers" />;
	}

	return (
		<div className="container-fluid">
			<h2>Latest Purchase:</h2>
			<p>{customer.firstName + " " + customer.lastName}</p>
			<h4>List of products:</h4>
			<ol>
				{customer.products.map((product) => (
					<li key={product.id}>{product.name}</li>
				))}
			</ol>
		</div>
	);
}

export default LatestPurchase;
