import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldFileInput from '../utils/FieldFileInput';
import FieldRadioGroup from '../utils/FieldRadioGroup';

class ProductForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, inputType="text", meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error': ''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} type={inputType} autoComplete="off"/>
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
				<Field name="title" component={this.renderInput} label="Enter Title"/>
				<Field name="description" component={this.renderInput} label="Enter Description"/>
				<Field 
					component={FieldRadioGroup} 
					name="listingType"
					label="Listing Type" 
					required={true} 
					options={[
						{title: 'Sell', value: 'sell'},
						{title: 'Rent', value: 'rent'}
					]} 
				/>
				<Field name="category" component={this.renderInput} label="Category"/>
				<Field name="year" component={this.renderInput} inputType="number" label="Enter Year of Purchase"/>
				<Field name="price" component={this.renderInput} inputType="number" label="Enter Price"/>
				<Field 
					name="image" 
					component={FieldFileInput}
					label="Upload an image of the product"
					required={true}
				/>

				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}
	if (!formValues.listingType) {
		errors.listingType = 'You must provide a Listing type';
	}
	if (!formValues.price) {
		errors.price = 'You must provide a price'
	}
	if (formValues.price && formValues.price <= 0) {
		errors.price = 'Who are you kidding with that price';
	}
	if (!formValues.year) {
		errors.year = 'You must enter a year';
	}

	return errors;
}

export default reduxForm({
	form: 'productForm',
	validate: validate
})(ProductForm);
