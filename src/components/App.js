import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import history from '../history';

import ProductCreate from './products/ProductCreate';
import ProductDelete from './products/ProductDelete';
import ProductEdit from './products/ProductEdit';
import ProductList from './products/ProductList';
import ProductShow from './products/ProductShow';


const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={ProductList} />
					<Route path="/products/new" exact component={ProductCreate} />
					<Route path="/products/edit/:id" exact component={ProductEdit} />
					<Route path="/products/delete/:id" exact component={ProductDelete} />
					<Route path="/products/show/:id" exact component={ProductShow} /> 
				</div>
			</Router>
		</div>
	);
};

export default App;