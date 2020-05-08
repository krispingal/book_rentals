import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
            <h3 className="ui teal header item">Book Rentals</h3>
			<Link to="/requests" className="item">
				Requests
			</Link>
			<div className="right menu">
				<div className="ui item">
                    <Link to="/products/new">Create Ad</Link>
                </div>
				<Link to="/" className="item">
					All Streams
				</Link>
				<GoogleAuth />
			</div>
		</div>
	);
}

export default Header;