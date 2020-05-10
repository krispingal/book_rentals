import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import ProductCreate from './products/ProductCreate';
import ProductDelete from './products/ProductDelete';
import ProductEdit from './products/ProductEdit';
import ProductList from './products/ProductList';
import ProductShow from './products/ProductShow';
import RequestList from './requests/RequestList';
import RequestCreate from './requests/RequestCreate';


const App = () => {
	return (
		<Router history={history}>
			<div>
				<Header />
				<div className="ui container">
					<Route path="/" exact component={ProductList} />
					<Route path="/products/new" exact component={ProductCreate} />
					<Route path="/products/edit/:id" exact component={ProductEdit} />
					<Route path="/products/delete/:id" exact component={ProductDelete} />
					<Route path="/products/:id" exact component={ProductShow} /> 
					<Route path="/requests" exact component={RequestList} /> 
					<Route path="/requests/new" exact component={RequestCreate} />
				</div>
			</div>
		</Router>
	);
};

export default App;