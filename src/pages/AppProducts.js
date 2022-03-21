import React, { useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

function AppProducts() {
	const [products, setProducts] = useState(ProductService.getAll());
	const [search, setSearch] = useState("");

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().startsWith(search.toLowerCase())
	);

	const setNewCount = (id, newCount) => {
		const index = products.findIndex((product) => product.id === id);

		setProducts([
			...products.slice(0, index),
			{ ...products[index], count: newCount },
			products.slice(index + 1),
		]);
	};

	const increment = (id) => {
		const newCount = ProductService.increment(id);
		setNewCount(id, newCount);
	};

	const decrement = (id) => {
		const newCount = ProductService.decrement(id);
		setNewCount(id, newCount);
	};

	return (
		<div className="container-fluid">
			<h2>Products:</h2>
			<input
				type="text"
				value={search}
				onChange={({ target }) => setSearch(target.value)}
				placeholder="Search products"
			/>
			<div>
				{filteredProducts.map((product) => (
					<SingleProduct
						key={product.id}
						id={product.id}
						name={product.name}
						count={product.count}
						decrementCallback={decrement}
						incrementCallback={increment}
					/>
				))}
			</div>
		</div>
	);
}

export default AppProducts;
