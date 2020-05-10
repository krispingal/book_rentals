import _ from 'lodash';
import {
	FETCH_REQUESTS,
	CREATE_REQUEST
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_REQUESTS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case CREATE_REQUEST:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}