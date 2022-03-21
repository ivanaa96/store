import React from "react";

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
		</div>
	);
}

export default SingleProduct;
