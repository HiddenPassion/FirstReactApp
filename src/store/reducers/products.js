import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../utility';

const initialState = {
	allProducts: [],
	selectedProduct: '',
	filteredProducts: [],
};

const fetchAllProductsSuccess = (state, action) => {
	return {
		...state,
		allProducts: action.products,
		filteredProducts: action.products,
	};
};

const fetchAllProductsFail = (state, action) => {
	return {
		...state,
	};
};

const filterProducts = (state, action) => {
	const updatedFilteredProducts = [];
	const allProducts = [...state.allProducts];		
	allProducts.map(product => {
		return {...allProducts[product]};
	});
	
	for (let product of allProducts) {			
		if(product.name.indexOf(action.value) >= 0) {			
			updatedFilteredProducts.push(product);
		}		
	}
	
	return {
		...state,
		filteredProducts: updatedFilteredProducts,
	};
};

const fetchProductByIdSuccess = (state, action) => {
	return {
		...state,
		selectedProduct: action.product,
	};
};
const fetchProductByIdFail = (state, action) => {
	return {
		...state,
	};
};

const reducer = (state = initialState, action) =>{
	switch(action.type) {
		case actionTypes.FETCH_ALLPRODUCTS_SUCCESS: return fetchAllProductsSuccess(state, action);
		case actionTypes.FETCH_ALLPRODUCTS_FAIL: return fetchAllProductsFail(state, action);
		case actionTypes.FILTER_PRODUCTS: return filterProducts(state, action);
		case actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS: return fetchProductByIdSuccess(state, action);
		case actionTypes.FETCH_PRODUCT_BY_ID_FAIL: return fetchProductByIdFail(state, action);
		default: return state;
	}
}

export default reducer;