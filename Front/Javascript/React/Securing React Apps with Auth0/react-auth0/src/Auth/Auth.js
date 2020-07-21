import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile",
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        this.history.push("/");
        alert(`Error: ${err.error}. Check the console for further details`);
        console.log(
          `Error: ${err.error}. Check the console for further details`
        );
      }
      if (authResult && authResult?.accessToken && authResult?.idToken) {
        this.setSession(authResult);
        this.history.push("/"); // programmatically tells React Router to redirect to Home
      }
    });
  };

  setSession = authResult => {
    // Set the expiration tome of the access token for local storage
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
  };

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };
}
