import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const fetchCartSuccess = (cart) => {
	return {
		type: actionTypes.FETCH_CART_SUCCESS,
		cart: cart
	};
};
export const fetchCartFail = error => {
	return {
		type: actionTypes.FETCH_CART_FAIL,
	};
};

export const removeFromCartFail = error => {
	return {
		type: actionTypes.REMOVE_FROM_CART_FAIL,
	}
}




export const loadData = () => {
	return dispatch => {
		axios.get('/get-cart')
			.then(res => {
				dispatch(fetchCartSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchCartFail(err));
			});
	};
};

export const removeFromCart = id => {
	return dispatch => {
		axios.patch('/remove-from-cart', {ID: id})
		.then(res => {
			dispatch(loadData());
		})
		.catch(err => {		
			dispatch(removeFromCartFail(err));
		});
	};
};

export const addToCartSuccess = data => {
	return {
		type: actionTypes.ADD_TO_CART_SUCCESS,
	};
};

export const addToCartFail = err => {
	return {
		type: actionTypes.ADD_TO_CART_FAIL,
	};
};

export const addToCart = id => {
	return dispatch => {
		axios.patch('/add-to-cart', {ID: id})
			.then(res => {
				dispatch(addToCartSuccess(res.data));
			})
			.catch(err => {
				dispatch(addToCartFail(err));
			});
	}
}

