import React from "react";

export default class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    switch (this.state.isSignedIn) {
      case null:
        return null;
      case true:
        return (
          <button className="ui red google button" onClick={this.onSignOut}>
            <i className="google icon" />
            Sign Out
          </button>
        );
      default:
        return (
          <button className="ui red google button" onClick={this.onSignIn}>
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
