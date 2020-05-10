import products from '../apis/products';
import requests from '../apis/requests';
import images from '../apis/images';
// import profiles from '../apis/profiles';
import history from '../history';
import { 
	SIGN_IN, 
	SIGN_OUT,
	CREATE_PRODUCT,
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	DELETE_PRODUCT,
	CREATE_REQUEST, 
	FETCH_REQUESTS
} from './types';

export const signIn = (userId, userName) => {
	return {
		type: SIGN_IN,
		payload: { userId, userName }
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

// export const signUp = (profileInfo) => async () => {
// 	profiles.post('/profiles', profileInfo);
// }


export const createProduct = (formValues, image) => async (dispatch, getState) => {
	// console.log(formValues);
	const { userId, userName } = getState().auth;
	const response = await products.post('/product', { ...formValues, userId, userName});
	const { id } = response.data;
	
	var bodyFormData = new FormData();
	bodyFormData.append('input_file', image); 
	const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
	await images.post(`/image/${id}`, bodyFormData, config);
	dispatch({ type: CREATE_PRODUCT, payload: id });
	history.push('/');
}

export const fetchProducts = () => async dispatch => {
	const response = await products.get('/products/0');

	dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => {
	const response = await products.get(`/product/${id}`);

	dispatch({ type: FETCH_PRODUCT, payload: response.data });
}

export const deleteProduct = id => async dispatch => {
	await products.delete(`/product/${id}`);

	dispatch({ type: DELETE_PRODUCT, payload: id })
	history.push('/');
}

export const createRequest = (formValues) => async (dispatch, getState) => {
	// console.log(formValues);
	const { userId, userName } = getState().auth;
	const response = await requests.post('/request', { ...formValues, userId, userName});

	dispatch({ type: CREATE_REQUEST, payload: response.data});
	history.push('/requests');
}

export const fetchRequests = () => async dispatch => {
	const response = await requests.get('/requests/0');

	dispatch({ type: FETCH_REQUESTS, payload: response.data });
};
