class CustomerService {
	constructor() {
		this.id = 4;
		this.customers = [
			{
				id: 1,
				firstName: "Kobe",
				lastName: "Bryant",
				products: [
					{ id: 1, name: "banana" },
					{ id: 2, name: "cherry" },
				],
			},
			{
				id: 2,
				firstName: "Michael",
				lastName: "Jordan",
				products: [
					{ id: 1, name: "apple" },
					{ id: 2, name: "milk" },
				],
			},
			{
				id: 3,
				firstName: "LeBron",
				lastName: "James",
				products: [
					{ id: 1, name: "cake" },
					{ id: 2, name: "coffee" },
				],
			},
		];
	}

	getAll() {
		return [...this.customers];
	}

	getId(id) {
		return this.customers.find((customer) => customer.id === parseInt(id));
	}

	delete(id) {
		const index = this.customers.findIndex((customer) => customer.id === id);
		this.customers.splice(index, 1);
		return true;
	}

	create(newCustomer) {
		this.customers.push({ id: this.id, ...newCustomer, products: [] });

		this.id++;

		//?
		return this.customers[this.customers.length - 1];
	}

	addProduct(id, productName) {
		const index = this.customers.findIndex(
			(customer) => customer.id === Number(id)
		);

		const lastProductId = this.customers[index].products.reduce(
			(lastId, product) => (lastId > product.id ? lastId : product.id),
			-1
		);

		this.customers[index].products.push({
			id: lastProductId + 1,
			name: productName,
		});
	}
}

export default new CustomerService();
