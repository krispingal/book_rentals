import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { createRequest } from '../../actions';
import RequestForm from './RequestForm';

class RequestCreate extends React.Component {
    onSubmit = (formValues) => {
        const payload = _.pick(formValues, 'title', 'category');
        //Processing fields
        const processedFields = {
            'renting': formValues['listingType'] === 'Rent',
        }
        this.props.createRequest({...payload, ...processedFields});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="ui header center aligned">Create new Request</h2>
                </div>
                <RequestForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createRequest })(RequestCreate);
