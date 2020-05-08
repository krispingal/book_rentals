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
					{this.renderAdmin(product)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{product.title}
						<div className="description">{product.description}</div>
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
				<div className="ui celled list">
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