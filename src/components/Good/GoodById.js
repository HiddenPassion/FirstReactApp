import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Good.css';
import * as actions from '../../store/actions/index';

class GoodById extends Component {
state = {
	product: {},
}

componentWillMount() {
	this.props.onFetchProductById(this.props.match.params.id);
}
			
render() {	

	return (
		<div >
			<div className={classes.Good}>
				<h1>{this.props.product.name}</h1>
				<img src={this.props.product.URL} alt={this.props.product.name} />
				<p>{this.props.product.description}</p>
			</div>
			<button 
				className={[classes.Button, classes.Success].join(' ')}
				onClick={() => this.props.onAddToCartHandler(this.props.product.ID)}>Add To Cart</button>
		</div>
	);
}
}



const mapStateToProps = state => {
	return {
		product: state.products.selectedProduct,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddToCartHandler: (id) => dispatch(actions.addToCart(id)),
		onFetchProductById: (id) => dispatch(actions.fetchProductById(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodById);