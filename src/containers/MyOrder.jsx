import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';

import backArrow from '@icons/flechita.svg';
import '../styles/MyOrder.scss';

const MyOrder = () => {

	const { state } = useContext(AppContext);

	const total = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);

		return sum;
	};

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={backArrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => (
					<OrderItem product={product} key={`OrderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>
						${total()}
					</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
