import React from "react";
import { Link } from "react-router-dom";

function SingleProduct({
	id,
	name,
	count,
	incrementCallback,
	decrementCallback,
}) {
	return (
		<div className="container-fluid">
			<p>Name: {name}</p>
			<p>At store: {count}</p>
			<button className="my-button" onClick={() => incrementCallback(id)}>
				+
			</button>
			<button className="my-button" onClick={() => decrementCallback(id)}>
				-
			</button>
			<Link to={`products/${id}`}>Buy product</Link>
		</div>
	);
}

export default SingleProduct;
