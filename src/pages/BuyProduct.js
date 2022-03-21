import CustomerService from "../services/CustomerService";
import ProductService from "../services/ProductService";
import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

function BuyProduct() {
	const { id } = useParams();
	const customers = CustomerService.getAll();
	const [product, setProduct] = useState(ProductService.get(id));
	const [selectedCustomer, setSelectedCustomer] = useState(customers[0].id);

	const handleChangeCustomer = (e) => {
		setSelectedCustomer(e.target.value);
	};

	const handleConfirm = () => {
		CustomerService.addProduct(selectedCustomer, product.name);
		const newCount = ProductService.decrement(id);
		setProduct({ ...product, count: newCount });
	};

	//?
	const handleCancel = () => {
		return <Redirect to="/products" />;
	};

	return (
		<div className="container-fluid">
			<h2> Buy product:</h2>
			<p>Name: {product.name}</p>
			<p>Available in store: {product.count}</p>
			<select onChange={handleChangeCustomer} value={selectedCustomer}>
				{customers.map((customer) => (
					<option key={customer.id} value={customer.id}>
						{customer.firstName} {customer.lastName}
					</option>
				))}
			</select>
			<button className="my-button" onClick={handleCancel}>
				Cancel
			</button>

			<button className="my-button" onClick={handleConfirm}>
				Confirm
			</button>
		</div>
	);
}

export default BuyProduct;
