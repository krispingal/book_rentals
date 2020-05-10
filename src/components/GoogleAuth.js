import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
// import profiles from '../apis/profiles';

class GoogleAuth extends React.Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '222977340053-oobhcl4oal5vf9g7m593n58doa0gd4l9.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			var profile = this.auth.currentUser.get().getBasicProfile();
			this.props.signIn(profile.getId(), profile.getGivenName());
			// var profilePayload = { 
			// 	'id': profile.getId(),
			// 	'email': profile.getEmail(),
			// 	'name': profile.getGivenName()
			// };

		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	}

	onSignOutClick = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />
					Sign in
				</button>
			);
		}
	}

	render() {
		return (
			<div className="item">
				{this.renderAuthButton()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
	mapStateToProps, 
	{ signIn, signOut }
)(GoogleAuth);