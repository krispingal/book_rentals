import React from 'react';
import { connect } from 'react-redux';

class UserAccount extends React.Component {
    render() {
        if (this.props.isSignedIn) {
			return (
                <div className="ui menu">
                    <div className="ui simple dropdown item">
                        Account
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">Account settings</div>
                            <div className="item">Listings</div>
                            <div className="item">Requests</div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}



const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps)(UserAccount);