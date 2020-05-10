import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import UserAccount from './UserAccount';
import './Header.css';

const Header = () => {
	return (
		<div className="ui menu">
			<div className="ui container">
				<h3 className="ui header item">
					<Link to='/'>Book Rentals</Link>
				</h3>
				<div className="ui item">
					<Link to="/requests">Requests</Link>
				</div>
				<div className="right menu">
					<div className="ui item">
						<Link to="/products/new">Create Ad</Link>
					</div>
					<UserAccount />
					<GoogleAuth />
				</div>
			</div>
		</div>
	);
}

export default Header;