import React from 'react';
import classes from './Cart.css';

const cart = (props) => {
	return (
		<div className={classes.Cart}>
			<p>Cart: {props.name}. Count: {props.count}</p>
			<button 
				className={classes.Button}
				onClick={props.clicked}>DELETE</button>
		</div>
	);
};

// const mapStateToProps = state => {
// 	cartProduct: state.
// };

export default cart
