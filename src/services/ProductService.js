class ProductService {
	constructor() {
		this.products = [
			{ id: 1, name: "milk", count: 5 },
			{ id: 2, name: "apple", count: 6 },
			{ id: 3, name: "lemon", count: 12 },
			{ id: 4, name: "orange", count: 9 },
			{ id: 5, name: "coffee", count: 2 },
		];
	}

	getAll() {
		return [...this.products];
	}

	get(id) {
		const product = this.products.find((product) => product.id === Number(id));

		return product ? { ...product } : `There is no product with id ${id}`;
	}

	increment(id) {
		const index = this.products.findIndex(
			(product) => product.id === Number(id)
		);

		if (index !== -1) {
			this.products[index].count++;
		}

		return this.products[index].count;
	}

	decrement(id) {
		const index = this.products.findIndex(
			(product) => product.id === Number(id)
		);

		if (index !== -1 && this.products[index].count > 0) {
			this.products[index].count--;
		}

		return this.products[index].count;
	}
}

export default new ProductService();
