import rest_api from '../apis/rest_api';
import history from '../history';
import { 
	SIGN_IN, 
	SIGN_OUT,
	CREATE_PRODUCT,
	FETCH_PRODUCTS,
	FETCH_PRODUCT
} from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createProduct = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await rest_api.post('/products', { ...formValues, userId });

	dispatch({ type: CREATE_PRODUCT, payload: response.data});
	history.push('/');
}

export const fetchProducts = page => async dispatch => {
	const response = await rest_api.get(`/products/{page}`);

	dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => {
	const response = await rest_api.get(`/product/{id}`);

	dispatch({ type: FETCH_PRODUCT, payload: response.data });
}