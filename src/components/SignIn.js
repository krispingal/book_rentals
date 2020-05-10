import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn, signUp } from '../actions';

class SignIn extends React.Component {
    
    render() {
        if (this.props.isSignedIn) {
            <Redirect to="/products" />
        }
        return (
            <div>
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
}


export default connect(
    mapStateToProps, 
    { signIn, signUp }
)(SignIn);