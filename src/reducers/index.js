import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import productReducer from './productReducer';
import requestReducer from './requestReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	products: productReducer,
	requests: requestReducer
});