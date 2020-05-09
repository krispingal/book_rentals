import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../actions';

class ProductList extends React.Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	renderList() {
		return this.props.products.map(product => {
			return (
				<div className="item" key={product.id}>
					<i className="large middle aligned icon camera" />
					<div className="content">
						<div className="ui small header">
							<Link to={`/products/${product.id}`}>
								{product.title}
							</Link>
						</div>
						<div className="productDescription">{product.description}</div>
						<div className="productListingType">Buying option : {product.renting ? 'Buy' : 'Rent'}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h1 className="ui grey header center aligned">
					Buy or rent these books from your fellow ASU students
				</h1>
				<div className="ui relaxed divided list">
					{this.renderList()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		products: Object.values(state.products),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
}

export default connect(mapStateToProps, { fetchProducts })(ProductList);