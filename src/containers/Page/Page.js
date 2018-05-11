import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoodsSearch from '../../components/GoodsSearch/GoodsSearch';
import GoodsSearchResult from '../../components/GoodsSearchResult/GoodsSearchResult';
import classes from './Page.css';
//import axios from '../../axios';
import * as actions from '../../store/actions/index';


class Page extends Component {
	state = {
		value: '',

	}

	filterProducts = (value) => {
		this.props.onFilterProducts(value);
	}
	
	inputChangedHandler = (event) => {	 
	 this.filterProducts(event.target.value);
	 this.setState( {
		 value: event.target.value,
	 } );
	}

	goodClickedHandler = (id) => {		
		this.props.history.push({
			pathname: this.props.match.path + 'selectedProduct/' + id,
		});
		
	}

	componentDidMount() {
		this.props.onFetchAllproducts();
	}

	render() {

		const filtered = this.props.filteredProducts.map(product => {	
			return (
				<GoodsSearchResult 
					key={product.ID || Math.random()}
					product={product}
					clicked={() => this.goodClickedHandler(product.ID)} />
			);
		});


		return (
			<div className={classes.Page}>
				<GoodsSearch
					value={this.state.value} 
					changed={(event) => this.inputChangedHandler(event)} />
				<div className={classes.Filtered}>
					{filtered}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		allProducts: state.products.allProducts,
		selectedProduct: state.products.selectedProduct,
		filteredProducts: state.products.filteredProducts,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchAllproducts: () => dispatch(actions.fetchAllproducts()),
		onFilterProducts: (value) => dispatch(actions.filterProducts(value))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
