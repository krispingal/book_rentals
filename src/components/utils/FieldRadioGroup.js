import React from 'react';

class FieldRadioGroup extends React.Component {
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

export default FieldRadioGroup;