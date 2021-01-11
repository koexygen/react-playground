import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "246352413121-t6f6e40htaqe9dqfnledpenvf3nj5bpu.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    switch (this.props.isSignedIn) {
      case null:
        return (
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            <div className="ui active inline loader tiny " />
          </button>
        );
      case true:
        return (
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            Sign Out
          </button>
        );
      default:
        return (
          <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon" />
            Sign In with Google
          </button>
        );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
