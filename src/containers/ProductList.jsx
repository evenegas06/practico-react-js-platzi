import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products/';

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(async () => {
		/* uso de fetch */
		// const response = await fetch(API);
		// setProducts(await response.json());

		/* uso de axios */
		const response = await axios(API);
		console.log(response);
		setProducts(response.data);
	}, []);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
