import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
					component={RadioGroup} 
					name="listingType"
					label="Listing Type" 
					required={true} 
					options={[
						{title: 'Sell', value: 'sell'},
						{title: 'Rent', value: 'rent'}
					]} 
				/>
				<Field name="price" component={this.renderInput} inputType="number" label="Enter Price"/>

				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

class RadioGroup extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

    render() {
		const { input, label, options, meta } = this.props
		
        const className = `field ${meta.error && meta.touched ? 'error': ''}`

        return (
            <div className={className}>
				<label>{label}</label>
				<div>
					{options.map(o => 
						<label key={o.value}>
							<input type="radio" {...input} value={o.value} checked={o.value === input.value} />
							{o.title}
						</label>
					)}
				</div>
				{this.renderError(meta)}
            </div>
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
		errors.price = 'Who are you kidding with that price'
	}

	return errors;
}

export default reduxForm({
	form: 'productForm',
	validate: validate
})(ProductForm);
