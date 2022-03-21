import React, { useState } from "react";
import CustomerService from "../services/CustomerService";

function AppCustomers() {
	const [customers, setCustomers] = useState(CustomerService.getAll());

	const [newCustomer, setNewCustomer] = useState({
		firstName: "",
		lastName: "",
	});

	const handleDelete = (id) => {
		const isDeleted = CustomerService.delete(id);

		if (isDeleted) {
			const index = customers.findIndex((customer) => customer.id === id);
			setCustomers([
				...customers.slice(0, index),
				...customers.slice(index + 1),
			]);
		}
	};

	const handleFirstNameChange = (e) => {
		setNewCustomer({
			...newCustomer,
			firstName: e.target.value,
		});
	};

	const handleLastNameChange = (e) => {
		setNewCustomer({
			...newCustomer,
			lastName: e.target.value,
		});
	};

	const addNewCustomer = (e) => {
		e.preventDefault();
		setCustomers([...customers, newCustomer]);
		setNewCustomer({
			firstName: "",
			lastName: "",
		});
	};

	return (
		<div className="container-fluid col-5">
			<h2>List of customers:</h2>
			<ul className="list-group">
				{customers.map((customer) => (
					<li key={customer.id} id={customer.id} className="list-group-item">
						{customer.firstName} {customer.lastName}
						<button
							onClick={() => handleDelete(customer.id)}
							className="my-button"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<hr />
			<div className="container">
				<h2>Form:</h2>
				<form onSubmit={addNewCustomer}>
					<label htmlFor="firstName" classname="col-form-label col-25">
						First Name:
					</label>
					<input
						type="text"
						className="form-control col-75"
						name="firstName"
						required
						placeholder="Enter your name"
						value={newCustomer.firstName}
						onChange={handleFirstNameChange}
					/>
					<br />

					<label htmlFor="lastName" classname="col-form-label col-25">
						Last Name:
					</label>
					<input
						type="text"
						className="form-control col-75"
						name="lastName"
						required
						placeholder="Enter your last name"
						value={newCustomer.lastName}
						onChange={handleLastNameChange}
					/>
					<br />
					<button className="form-button my-button">Add new customer</button>
				</form>
			</div>
		</div>
	);
}

export default AppCustomers;
