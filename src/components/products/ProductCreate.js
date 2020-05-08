import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../actions';
import ProductForm from './ProductForm';

class ProductCreate extends React.Component {
    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Product listing</h3>
                <ProductForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createProduct })(ProductCreate);
