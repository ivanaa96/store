class CustomerService {
	id = 4;
	customers = [
		{ id: 1, firstName: "Kobe", lastName: "Bryant" },
		{ id: 2, firstName: "Michael", lastName: "Jordan" },
		{ id: 3, firstName: "LeBron", lastName: "James" },
	];

	getAll() {
		return this.customers;
	}

	getId(id) {
		return this.customers.find((customer) => customer.id === id);
	}

	delete(id) {
		const newCustomersList = [
			...this.customers.filter((customer, id) => {
				return customer.id === id;
			}),
		];

		return newCustomersList;
	}

	add(newCustomer) {
		this.customers.push({ id: this.id, ...newCustomer, products: [] });
		this.id++;
		return this.customers;
	}
}

export default new CustomerService();
