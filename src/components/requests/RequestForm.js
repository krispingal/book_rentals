import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldRadioGroup from '../utils/FieldRadioGroup';

class RequestCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="title" component={this.renderInput} label="Enter title of product" />
                <Field name="category" component={this.renderInput} label="Enter category of product" />
                <Field 
					component={FieldRadioGroup} 
					name="listingType"
					label="Listing Type" 
					required={true} 
					options={[
						{title: 'Buy', value: 'buy'},
						{title: 'Rent', value: 'rent'}
					]} 
				/>
                <button className="ui button primary">Submit</button>
            
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must have a title'
    }
    return errors;
}

export default reduxForm({
    form: 'RequestForm',
    validate: validate
})(RequestCreate);
