import React, { Component } from 'react';
import { connect }  from 'react-redux';

import Cart from '../../components/Cart/Cart';
//import axios from '../../axios';
import classes from './CartPage.css';
import * as actions from '../../store/actions/index';

class CartPage extends Component {

	componentDidMount() {
		this.props.onFetchCart();
	}
	

	render() {
		const cartProducts = this.props.cartProducts.map( product => (
			<Cart
				key={product.ID}
				name={product.name}
				count={product.count} 
				clicked={() => this.props.onRemoveFromCartHandler(product.ID)}/>
		))
		return (
			<div className={classes.CartPage}>
				<h1>Корзина</h1>
				<div className={classes.Carts}>
					{cartProducts}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cartProducts: state.cart.cartProducts,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onRemoveFromCartHandler: (id) => dispatch(actions.removeFromCart(id)),
		onFetchCart: () => dispatch(actions.loadData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);