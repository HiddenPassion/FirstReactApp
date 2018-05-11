import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchAllproductsSuccess = products => {
	return {
		type: actionTypes.FETCH_ALLPRODUCTS_SUCCESS,
		products: products,
	};
};

export const fetchAllproductsFail = err => {
	return {
		type: actionTypes.FETCH_ALLPRODUCTS_FAIL,
	}
}

export const fetchAllproducts = () => {
	return dispatch => {
		axios.get('get-allproducts')
			.then(res => {
				dispatch(fetchAllproductsSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchAllproductsFail(err));				
			});
	};
};

export const filterProducts = value => {
	return  {
		type: actionTypes.FILTER_PRODUCTS,
		value: value,
	};
};

export const fetchProductByIdSuccess = product => {
	return {
		type: actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
		product: product,
	};
};

export const fetchProductByIdFail = err => {
	return {
		type: actionTypes.FETCH_PRODUCT_BY_ID_FAIL,
	};
};

export const fetchProductById = (id) => {
	return dispatch => {
		axios.get(`/get-selectedProductById/${id}`)
			.then(res => {
				dispatch(fetchProductByIdSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchProductByIdFail(err));
			});
	};
};
