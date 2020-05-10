import React from 'react';
import { connect } from 'react-redux';
import { fetchRequests } from '../../actions';

class RequestList extends React.Component {
	componentDidMount() {
		this.props.fetchRequests();
	}

	renderList() {
		return this.props.requests.map(request => {
			return (
				<div className="item" key={request.id}>
					<i className="large middle aligned icon camera" />
					<div className="content">
						<div className="ui medium header">{request.title}</div>
						<div className="requestListingType">Listing option : {request.renting ? 'Rent' : 'Buy'}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h1 className="ui grey header center aligned">
					Requests for books from your fellow ASU students
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
		requests: Object.values(state.requests),
	};
}

export default connect(mapStateToProps, { fetchRequests })(RequestList);