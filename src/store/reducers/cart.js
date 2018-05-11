import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../utility';

const initialState = {
	cartProducts: [],
};

const reducer = (state = initialState, action) =>{
	switch(action.type) {
		case actionTypes.FETCH_CART_SUCCESS:
			return {
				...state,
				cartProducts: action.cart,
			};
		case actionTypes.FETCH_CART_FAIL:
			return {
				...state,
			};
		case actionTypes.REMOVE_FROM_CART_FAIL:
			return {
				...state,
			};
		case actionTypes.ADD_TO_CART_SUCCESS:
			return {
				...state,
			};
		case actionTypes.ADD_TO_CART_FAIL:
			return {
				...state,
			};
		default: return state;
	}
}
export default reducer;