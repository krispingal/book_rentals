import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, deleteProduct } from '../../actions';
import history from '../../history';

class ProductShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchProduct(id);
    }
    
    renderProductDetails() {
        const { product } = this.props;
        return (
            <div className="product_description">
                <h3 className="ui top attached header">
                    {product.title}
                    <div className="sub header">
                        ${product.price}
                    </div>
                </h3>
                <div className="ui attached segment">
                    <div className="description">{product.description}</div>
                </div>
		    </div>
        );
    }

    onBuyClick = () => {
        this.props.deleteProduct(this.props.product.id);
    }

    onCancelClick = () => {
        history.push('/');
    }

	render(){
        const { product } = this.props;
        if (!product) {
            return <div>Loading...</div>;
        }
        const actionButtonText = product.renting ? 'Buy' : 'Rent';
        return (
            <div>
                {this.renderProductDetails()}
                <div className="attched two ui buttons" >
                    <button onClick={this.onBuyClick} className="ui button primary">{actionButtonText}</button>
                    <button onClick={this.onCancelClick} className="ui button">Cancel</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { product: state.products[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchProduct, deleteProduct }
)(ProductShow);