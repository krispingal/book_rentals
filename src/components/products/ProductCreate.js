import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../actions';
import ProductForm from './ProductForm';

class ProductCreate extends React.Component {
    onSubmit = (formValues) => {
        const payload = _.pick(formValues, 'title', 'description', 'category');
        //Processing fields
        const processedFields = {
            'renting': formValues['listingType'] === 'rent',
            'price': Number(formValues['price']),
            'year': Number(formValues['year'])
        }
        // console.log(formValues);
        this.props.createProduct({...payload, ...processedFields}, formValues['image']);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="ui header center aligned">Create a Product listing</h2>
                </div>
                <ProductForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createProduct })(ProductCreate);
