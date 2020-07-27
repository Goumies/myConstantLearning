## Securing React Apps with Auth0
[Pluralsight](https://app.pluralsight.com/library/courses/react-auth0-authentication-security/table-of-contents)


## Auth Providers
Concerns : 
    Authentication = Who are u ? => Login w/ email & password
    Authorization = What are u allowed to do ? check rights

Popular Auth Providers :
Auth0, okta

why opting for a Auth provider ?
    Security is hard
    Customizable
    Free for many apps
    
In this course, Auth0 :
    the most popular
    it has superb documentation
    it offers excellent mature libraries for creating single-page apps,
    it offers a generous free tier supporting up to 7, 000 active users 

## Key Standards

### OAuth 2.0
= Latest version
Auth0 = security provider
OAuth 2.0 = security protocol about Authorization

Authorization implies consent screen to ask permission to access data
In OAuth terms, Permissions = Scopes

Scope = String
verb:noun
=> read:user

Authorization protocol
    to authorize a user without their password
    and get info from a third party

OAuth Setup
    Register app with service
        Providers => Fb, Google, Ms, CAF, Impots, ameli
        : app name, website, callback URL
        
OAuth Roles
    Resource Owner (the account owner) = User
    Client (app that want to access the user's info, requests permission) = App
    Auth Server (handles authentication and provides access tokens) = Auth logic => Auth0
    Resource Server (holds protected info, API that the App want to access) = User data

OAuth Flow
    Client App ---> [Auth Request] ---> Resource Owner (User) > consent screen
    Client App <--- [Auth Grant] <--- Resource Owner (User)
    ---
    Client App ---> [Auth Grant, Authentication App's ID] ---> Auth Server (Auth0)
                                                               > authenticates the App's ID, validates the auth grant
    Client App <--- [Access Token] <--- Auth Server (Auth0)
    ---
    Client App ---> [Access Token] ---> Resource Server (Auth0)
    Client App ---> [User Data, as long as the token is valid] ---> Resource Server (Auth0)
    

Auth Grant = proof that user clicked "Accept" on the consent screen
Access Token = proof that the app is allowed to access User's Info & call the app protected APIs

Grant (aka flow) cF Pick a Flow capture
= A way to receive an access token
    Client side rendered SPAs = Implicit Grant
    Client side rendered native app = Authorization Code Grant (PKCE)
    
Implicit Flow
    1) The App directs the browser to the Auth0 sign-in
    2) Auth0 redirects to the App, at the specified callback URL (w/ access & ID tokens as hash fragments in the URI)
    3) The App extracts these tokens from the URI & stores the relevant authentication data in local storage
--
                        /!\
-  OAuth is for Authorization, not Authentication  -
No user information retrieval standard in OAuth 2.0

### OpenID Connect (OIDC)
Problem
    OAuth is for Authorization -> No standard for scopes and user info requests
    It would be nice to avoid managing passwords ourselves
Solution
    Establish a clear standard for authentication w/ OAuth 2.0
    = OpenID Connect
    = increases security by putting the responsability for user identity
        verification in the hands of expert service provider
    ---
    Layers
                        OpenID Connect (On top of OAuth, handles Authentication -who are you ?-)
                        OAuth 2.0 (utilises HTTP to handle Authorization -what you can do ?-)
                        HTTP
    ---
    OpenID Connect (that integrates w/ OAuth) adds :
        ID Token (JWT)
        UserInfo endpoint
        Standard scopes
    ---
    OpenID History 
        OpenID (little usage) >
        OpenID 2.0 (No native app support, used XML) >
        OpenID Connect (Current standard, uses JWT = JSON encoded in JWT)
    If you can send and receive JSON over HTTP, you can implement OpenID Connect from scratch
    BUT you don't have to (lots of open-source and commercial libs)

OpenID Connect Jargon
    Relying party = App
    Identity Providers = Fb, Google, Ms, CAF, Impots, ameli

### JSON Web Tokens (JWT)
Access Token
Used for authorization & info exchange
Often contains user info
Pronounced as "JOT"
Content easily verified and trusted because it's digitally signed
Can be encrypted but that's less common
    /!\ Don't push put secret data in the payload or header elements unless the JWT is encrypted

### Why JWT over SAML (Security Assertion Markup Language) ?
JSON is less verbose than XML
Smaller when encoded too
Easier to sign than SAML
JSON is easy to parse on the client --> browser cause it's JS

JWT Parts - cF JWT Parts capture
    Header 
            {
                Type,    
                Hash Algorithm,    
                Key ID    
            }
        Body
            {
                User Identity Claims*
                *JWT is claiming info    
            }
        Signature 
            (
                Verify the sender
                Assure content is legit
            )
    ---
    Header 
        {
            "typ": "JWT",    
            "alg": "RS256",    
            "kid": "NUY..."    
        }
    Body
        {
            "sub": "12345",    
            "name": "John Doe",    
            "iat": 1561239022    
        }
    Signature 
        HMACSHA256(
            base64UrlEncode(header) + "." +
            base64UrlEncode(payload),
            the-secret
        )

Identity and Access Tokens have different format - cF Tokens capture
ID Tokens properties = claims

Access Tokens focus is on scopes

Only User Data present in both types = "sub"

/!\ Unlike cookies, JWTs can't be revoked. SO make their lifespan short !
    Why ? Trusted by the client without a callback to the server
    = This is why Auth0 defaults to about 10 hours

Summary
    1) Login and receive JWT Identity Token (OIDC)
    2) Authorize app and receive Access Token (OAuth 2.0)
    3) Include Access Token in API calls fr authorization
    
    Use Identity Tokens for authentication (User Data)
    Use Access Tokens to access APIs (Scpoes)

Tools :
[create-react-app](http://github.com/facebook/create-react-app)
[React Router](https://reactrouter.com/web/guides/quick-start)
On the shell :
    `npx create-react-app react-auth0`
    
React snippets (IntelliJ)
Live Templates For React
Show details in Preferences -> Editor -> Live Templates -> React Group.
`rcc` = create react class component
`rsc` = create react stateless component (functional)

Deps : 
```
    npm install auth0-js@9.13.4 auth0-lock@11.25.1 express@4.17.1 express-jwt@5.3.1 express-jwt-authz@1.0.0 jwks-rsa@1.3.0 npm-run-all@4.1.5 react-router-dom@5.2.0
    npm install auth0-js auth0-lock express express-jwt express-jwt-authz jwks-rsa npm-run-all react-router-dom
```

## Time to code
Course versions used :
auth0-js 9
Lock 11

### Sign up for Auth0
[auth0](https://auth0.com/)
Tenant domain :
Logical isolation unit (no tenant can access data in another tenant)
+- like a software development environment

auth0 recommends 1 tenant per environment => dev/prod/qa -> -dev

My tenant : reactjs-goumies-dev.eu.auth0.com

### Key decisions
OAuth Flow
    Implicit Flow
        1) The App directs the browser to the Auth0 sign-in
        2) Auth0 redirects to the App, at the specified callback URL (w/ access & ID tokens as hash fragments in the URI)
        3) The App extracts these tokens from the URI & stores the relevant authentication data in local storage
--
Login/Signup integration
    AuthO options :
        Universal, hosted by Auth0 = the most secured since it avoids cross domain issues > uses the Lock Widget*
        Embedded Lock, embedded within our App. The Login form is placed inside our React App > uses the Lock Widget*
            /!\ Embedded Lock requires  cross domain calls between Auth0 and our app
                = Less secure. It's recommended to set up a custom domain for optimal security 
        Custom UI, built by ourselves > uses Auth0 APIs (Auth0 provides a SDK + a variety of APIs)
    -
    *Lock Widget :
        Easily integrates with Auth0
        Adapts to your config
        Looks great on any device
        Remembers the last used connection
        Automatic internationalization
        Detailed password policy check
        Customizable
    -
    Universal Advantages :
        Recommended by Auth0
        Most secure
        Single, centralized login for SSO > a single consistent login approach
            if we're implementing Single Sign On accross multiple apps
        Less maintenance work > a single login can serve all our apps
        => Google centralized login page regardless of which Google property we're using

### Create Auth0 app
Getting started > Create application >
    name: react-auth0-pluralsight + app type: Single Page Web Apps (implicit grant automatically configured by auth0) 
Apps > react-auth0-pluralsight > settings > Allowed Callback URLs :
    http://localhost:3000/callback

[authO lib docs](http://auth0.github.io/auth0.js/index.html)
    
### Configure .env vars
create-react-app automatically exposes vars starting w/ "REACT_APP_" to our app
```dotenv
REACT_APP_AUTH0_DOMAIN=reactjs-goumies-dev.eu.auth0.com
REACT_APP_AUTH0_CLIENT_ID=secret
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000/callback
```

### Create Auth Object
// src/Auth/Auth.js :
```js
import auth0 from 'auth0-js';

export default class Auth {
    constructor(history) { // React Router's history is passed to perform redirects
    this.history = history;
            this.auth0 = new auth0.WebAuth({
                domain: process.env.REACT_APP_AUTH0_DOMAIN,
                clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
                redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
                responseType: "token id_token", // 1) access token allowing API calls 2) authenticate the user
                scope: "openid profile email" // **
/*
                = openID for authentication > JWT returned = standard openID claims*
                    + profile > basic User data cF Auth.js capture
                    + email > we want it
*/
            });
    }
}
```
*standard openID claims :
    iss Issuer
    sub Subject
    aud Audience
    exp Expiration Time
    nbf Not before
    iat Issued At
    
**scope :
    When the user signs up, they'll be presented w/ a consent to us using this data
    
## Implement Login
### auth0-js 
```js
//...
login = () => {
    this.auth0.authorize(); // redirects the browser to the Auth0 login pge
}
```
= class property syntax = no need to worry about `this`

// App.js :
```js
class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
        // history from React Router will automatically be injected in the component since our app is wrapped in a route
        /*
            We can put the auth object in state.
            NOT necessary for our usage in this course,
            that's why it's an instance variable    
        */
  }
  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <!--
            Before :
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />

            /!\ We need to pass props down to the component used as props :
            After :
          -->
          <Route
              path="/"
              exact
              render={props => <Home auth=this.auth {...props} />}
          />
          <Route path="/profile" render={props => <Profile auth=this.auth {...props} />} />
        </div>
      </>
    );
  }
}
```
/!\
The consent dialog in the capture is displayed because we're localhost
On a regular domain, it won't display unless the app is marked as a third party app in the Auth0 Dashboard

Returned callback URL :
```dotenv
http://localhost:3000/callback#
    access_token=_6n5UUBJ9ABCXFkGTFM6YmnhDRshzbYu
    &
    scope=openid%20profile
    &
    expires_in=7200
    &
    token_type=Bearer
    &
    state=IjeEqUraVBaZEYQd4l-ZXb5nRngF~tjZ
    &
    id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdTNDNXcTV2R2FsaXNyeUR0bzhoTCJ9.eyJnaXZlbl9uYW1lIjoiUm9teSIsImZhbWlseV9uYW1lIjoiQWx1bGEiLCJuaWNrbmFtZSI6InJvbXkuYWx1bGEiLCJuYW1lIjoiUm9teSBBbHVsYSIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLVpncmRJdk9iTmFjL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y216NXpmTVBCWWIwZVlpVGxOd1U4aFBYTjRvSHcvcGhvdG8uanBnIiwibG9jYWxlIjoiZnIiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0yMVQxMDo1NzozNS4yNzRaIiwiaXNzIjoiaHR0cHM6Ly9yZWFjdGpzLWdvdW1pZXMtZGV2LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjgzNTYxMDEwMjc2MDU5MzY5NiIsImF1ZCI6IklHbkU0aUVaczhWVEpyMTJkVTZCeDN0VUlYaFBOR1NVIiwiaWF0IjoxNTk1MzI5MDc5LCJleHAiOjE1OTUzNjUwNzksImF0X2hhc2giOiJtYWNMZnBXYU9kNFdDVTFfTnptYjNBIiwibm9uY2UiOiJuTTJhcElwWWl1eUJiZHJ4ZlZVdmxEMFJBT2lpemhzbiJ9.zf5peKfyuC43IVWsS4squiI5QZV8GIOERgBDcr3EUa9ZFZa-RQXuBfREDnMPpDKsoSMwSxJtlQZnON0ry5Kfig0KG_GaqEVBdtB87L8KWGs5yWQ9lDrmwHbKw7OLSuzns0yOszuJNAHoDC0WWFFKpJP33WgAeNVsK4g6E30M8uM6OCQPlz_1jF3b_6qpI-0vWFsy7cVMIlMKrbPJYScZlZUuEwhmZtPciDCiyvc9ZQgZJKnXk8jp_bfy5mWoM3CYXeE5fE2onYmUI4FFus1N4qN0L-jdFE9Y5-Ws3pP2UPSN8ftmltksFzRc9P4A7ZcLTaITW76ahNKTGzbaEDeaOQ
```
/!\ opaque strings, NOT JWT
expires_in=(seconds) => 7200 = default = 120 min
state=encrypted value used by Auth0 so that they know we are the originating app

Callback Page & parsing the callback URL
// Callback.js :
```js
import React, {Component} from 'react';

class Callback extends Component {
    componentDidMount() {
        //Handle authentication if expected values are in the URL
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.handleAuthentication();
        }
        throw new Error("Invalid callback URL")
    }

    render() {
        return (
            <h1>Loading...</h1>
        );
    }
}
```

### Storing Tokens
LocalStorage /!\ NOT secure
SessionStorage
Cookie /!\ XSRF* vulnerable : Attacker causes a user's browser to perform an unwanted action while logged in
    /!\ Sent on all requests, which wastes bandwidth
    Recommended if our React app has a dedicated server to set an HttpOnly cookie w/ a secure flag enabled
    /!\ HTTP only cookies help protect from cross-site scripting since such cookies can't be accessed by JavaScript.
        This is why you have to generate these cookies on a server.
     /!\ XSS* vulnerable : w/out HttpOnly
In Memory

*[XSRF - Cross-site request forgery](https://docs.microsoft.com/fr-fr/aspnet/core/security/anti-request-forgery?view=aspnetcore-3.1) : Cross-site request forgery
*[XSS - Cross-site scripting](https://owasp.org/www-community/attacks/xss/) : Cross-site request forgery
    => yourapp.com?q=<script%20type='text/javascript'>alert('xss');</script>
    = global JS can access localStorage and session !
    
/!\ Reacts helps preventing XSS by design, by escaping variables + cF Cross-site Scripting

[---         Auth0 Tokens Storage Recommendations          ---](https://auth0.com/docs/tokens/concepts/token-storage)

If a backend is present, tokens should be handled server-side
    If the SPA backend cannot handle the API calls, the tokens should be stored in the SPA backend
    BUT the SPA needs to fetch the tokens from the backend to perform requests to the API.
    A protocol needs to be established between the backend and the SPA to allow the secure transfer
    of the token from the backend to the SPA.
    --> [Authorization Code Flow](https://auth0.com/docs/flows/concepts/auth-code)
    
For simplicity purpose, in this course, we'll store the tokens in the local storage
    For SPA app without backend, it's recommended to store the tokens in memory
    --> To avoid making the user login again on new/closed tab, we can use silent auth*
    -
    *Silent auth :
        cF final module
+ Look for Tokens Storage trade-offs
    [
        https://medium.com/swlh/all-you-need-to-know-about-authentication-is-here-25c8d8135cd6,
        
    ]

// in Auth.js :
```js
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
```

```js
setSession = authResult => {
    // Set the expiration tome of the access token for local storage
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    
    // Calculate the UNIX Epoch time (number of milliseconds since January 1st 1970) when our token will expire
    /*
        new Date().getTime() = get current UTC Time in UNIX Epoch Time
        authResult.expiresIn * 1000 + new Date().getTime()
        = (seconds * 1000) + current UTC Time in UNIX Epoch Time
        = milliseconds + current UTC Time in UNIX Epoch Time
     */

      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
};
```
[jwt-decode](https://www.npmjs.com/package/jwt-decode)

## Implement Logout
In Auth.js :
```js
logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");

    this.history.push("/");
  };
```
= Soft Logout
= on login, automatic connection
= useful on SSO scenarios
    + session still valid for other apps using Auth0 tenant

Auth0 checks ths session cookie on our Auth0 domain to determine if the user is logged in
cF https://reactjs-goumies-dev.eu.auth0.com/.well-known/jwks.json capture
On the link above(JSON Web Key address on your Auth0 domain), in Application > Cookies :
    `auth0` = session cookie = if present, session still active on the server

In Auth.js :
```js
logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    
    // this breaks the app because we need to set parameters on the Auth0 Dashboard
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000"
    });
};
```

### Auth0 Dashboard
Apps > reactjs-goumies-dev :
Allowed Logout URLs : http://localhost:3000

## Implement Signup
cF Signup screenshots
By default, Auth0 stores users in its DB. We can add storage to our own DB as well. (cF Database Connections screenshot)

## Display User Profile
In Auth.js :
```js
constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile",
    });
    // new variable instance initialisation
    this.userProfile = null;
  }
```

```js
  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  };

  getProfile = cb => { // cb = callback
    if(this.userProfile) return cb(this.userProfile);
    // userInfo = common on every identity provider + endpoint part of Auth0 standard
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) {
        this.userProfile = profile;
        cb(profile, err);
      }
    });
  };
```
Alternatively, we could get the user's profile from the ID token via jwt-decode

```js
logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");

    // Unnecessary, should be removed since the auth0 logout will clear it
    this.userProfile = null;
    
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000"
    });
  };
```

In App.js :
```jsx harmony
<Route
    path="/profile"
    render={(props) =>
      this.auth.isAuthenticated()
        ? <Profile auth={this.auth} {...props} />
        : <Redirect to="/" />
    }
/>
```

In Profile.js :
```js
class Profile extends Component {
  state = {
    profile: null,
    error: "",
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile = () => {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  };

  render() {
    const { profile } = this.state;
    if(!profile) return null;
    return (
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture}
          alt="profile pic"
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}
```

## API Authorization Fundamentals
In .env, for API work :
Identifier of the API we're about to create
```dotenv
REACT_APP_AUTH0_AUDIENCE=http://localhost:3001
```
URL where we're going to host the API on locally
```
REACT_APP_AUTH0_API_URL=http://localhost:3001
```
/!\ Those 2 vars aren't supposed to match. Here it's just for clarity

### Integrate APIs w/ create-react-app
Node + Express API
In react-auth0/server.js :
```js
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/public', function (req, res) {
  res.json({
    message: "Hello from a public API !"
  })
});

app.listen(3001);
console.log(`>>> API server listening on ${process.env.REACT_APP_AUTH0_API_URL}`);
```

In package.json :
```json
{
    "scripts": {
        "start": "run-p start:client start:server",
        "start:client": "react-scripts start",
        "start:server": "node server.js",
    }
}
```
`run-p` = command that comes with `npm-run-all` [dev dependency](https://www.npmjs.com/package/npm-run-all)
            + tells node to run the following scripts in parallel
            => in `package.json` : `"npm-run-all": "^4.1.5",`

### Create multiple API endpoints
Public - anyone can call
Private - login required

In src/public.js :
```js
import React, {Component} from 'react';

class Public extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch('/public').then(response => { // relative path so it leads to localhost:3000*
      if (response.ok) return response.json();
      throw new Error('Network response was not OK');
    })
      .then(response => this.setState({message: response.message}))
      .catch(error => this.setState({message: error.message}))
  }

  render() {
    return (
      <p>
        {this.state.message}
      </p>
    );
  }
}

export default Public;
```

*To make it leads to `localhost:3001`, we can use the proxy feature of create-react-app
--> In `package.json`, we add :
```json
{
    "proxy": "http://localhost:3001"
}
```
This line tells create-react-app to [proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) any calls to `http://localhost:3000` to `http://localhost:3001`
/!\ This avoids cross-origin resource sharing issues and error messages in dev

## Securing API calls
Create Auth0 API
`auth.com > dashboard > APIs` [APIs](https://manage.auth0.com/dashboard/eu/reactjs-goumies-dev/apis):
--> + Create API :
1 API for multiple endpoints
= Single Authorization request giving the user an access token that works for multiple APIs 

1 environment = 1 tenant = 1 API identifier
=> dev : https://dev.myapi.com
   QA : https://qa.myapi.com
   Prod : https://myapi.com
   
Default signing algorithm : RS256

---

Tell the Auth class about the API configured on auth0.com, by adding te audience to the options :
In `Auth.js`: 
```js
constructor(history) {
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: "token id_token",
      scope: "openid profile",
    });
    this.userProfile = null;
  }
```

### Configure Express to parse JWTs
In `server.js`, add :
```js
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint

// To validate our JWTs :
const checkJwt = jwt({
  // Dynamically provide a signing key based on the kind in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"]
});
```

## Validating a JWT:
### Verify Signature
Auth0 exposes a JSON Web Key Set (JWKS*) at a dedicated URL for our domain
=> https://reactjs-goumies-dev.eu.auth0.com/.well-known/jwks.json

*JSON Web Key Set / [JWKS](http://auth0.com/docs/jwks) : 
a JSON object that represents a cryptographic key.
The members of the object represent properties of the key including its value.
=>
{keys: [{alg: "RS256", kty: "RSA", use: "sig",…}, {alg: "RS256", kty: "RSA", use: "sig",…}]}
    keys: [{alg: "RS256", kty: "RSA", use: "sig",…}, {alg: "RS256", kty: "RSA", use: "sig",…}]
        0: {alg: "RS256", kty: "RSA", use: "sig",…}
            alg: "RS256"
            kty: "RSA"
            use: "sig"
            n: "15GXaf3kbelwSSEEVF0DLquOoESdNSgdr3UYOZQzxaafzX5O1xzW_LLDsPZSqgYaPpdJEz4tnnBEzkIS6woDx1-osh5QaULZ8rAcsr8W7TGM9wyscTxhezNrrA6Cl89i6SV9Wzq7fNrHpYQaAysm03NmLpdiQp1ngM2-gqG2Q7OCsjl_csA0QbSi3P_VPhC_loVXVHkm2j2dr-sihUQNvOezbd9tdCnqWOFaOZRS-CdjEQ7eumt434TOP94SE7iv1N1fyeYJdXyohjtHEa_jfRDUur15rheNgtAGsKKbbQ8rditaEhMi1Q2PV_-hJl8tMYFXoz-Y6FtyhnXociVVyQ"
            e: "AQAB"
            kid: "GS43Wq5vGalisryDto8hL"
            x5t: "h6-VjhjISBtrqF1niH0qT5HrCzU"
            x5c: [,…]
        1: {alg: "RS256", kty: "RSA", use: "sig",…}
            alg: "RS256"
            kty: "RSA"
            use: "sig"
            n: "wgOF06yYAhXOxuBEHyfEy_en_mkxaGpikAdbPQuoJpXo10I4KC_ip9bLjMqS_pxSNhEGmiSaGRx5KsSj4KuONa2e0WSLoPPyDQ_LL3fN_wviAdC6UjDZWRWcL23s8EuAMe6Fgm3k9FURPa67l7XpuTm4XTPj_ke2h-J-2tCaH98o09VBSF5KEw2jHBnkWfaQU-hakVG-5kEyXteP6rzTGSduSCc7KumJTXO24zx5mtZG8eD30bMmrVvepAG7M0KcxvA26n-dYDCPTX7TGIg-BgngPhYQL0K-1dELn6zadXzt144RNd-u8k8XhuVE7fu0dar4Nbis5ITcOOnWlm0fQw"
            e: "AQAB"
            kid: "8zHoYPLClL8hSeMXLNqO5"
            x5t: "oKwC2pTOqeLuxj9jsToUlJiw-NA"
            x5c: [,…]

### Validate Claims
exp Expiration Time     Confirm it hasn't expired
iss Issued by           Confirm it matches our Auth0 domain
aud Audience            Confirm it matches our client ID

---

In `server.js` :
```js
app.get('/private', checkJwt, function (req, res) {
  res.json({
    message: "Hello from a private API !"
  })
});
```
Express supports declaring multiple arguments here to validate the request.
If any declared checks fail, then the request will fail.

Let's call this new endpoint in React :
In `private.js` :
```js
import React, {Component} from 'react';

class Private extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    // fetch(path, configuration object )
    fetch('/private', {
          headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
        }).then(response => {
          if (response.ok) return response.json();
          throw new Error('Network response was not OK');
        })
          .then(response => this.setState({message: response.message}))
          .catch(error => this.setState({message: error.message}))
  }

  render() {
    return (
      <p>
        {this.state.message}
      </p>
    );
  }
}

export default Private;
```

In `App.js`: 
```jsx harmony
  <Route
    path="/private"
    render={(props) => <Private auth={this.auth} {...props} />}
  />
```
auth is required to check authentication for logged in users


In `Nav.js`: 
```html
    {isAuthenticated() && (
     <li>
       <Link to="/private">Private</Link>
     </li>
    )}
```

In `App.js`: 
```jsx harmony
    <Route
      path="/private"
      render={(props) =>
        this.auth.isAuthenticated() ? (
          <Private auth={this.auth} {...props} />
        ) : (
          this.auth.login() // will redirect the user to login
        )
      }
    />
```

## API Authorization with Scopes, Rules and Roles
### OAuth2 scopes
OAuth 2
    Gives permission without sharing credentials
    Each permission we grant is called scope

### Create scopes
auth0.com > dashboard > APIs > Demo API > Permissions >
Permission	    Description	
read:courses	permission to read the current user's courses

In `Auth.js` :
```js
{
  constructor(history) {
      this.history = history;
      this.userProfile = null;
      this.requestedScopes = "openid profile email read:courses";
      this.auth0 = new auth0.WebAuth({
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        responseType: "token id_token",
        scope: this.requestedScopes, // <--
      });
    }
}
```
```js
{
  setSession = authResult => {
      // Set the expiration tome of the access token for local storage
      const expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );
  
      // If there is a value on the `scope` param from the authResult,
      // use it to set scopes in the session for the user. Otherwise
      // use the scopes as requested. If no scopes were requested,
      // set it to nothing
      const scopes = authResult.scope || this.requestedScopes || ""; // <--
  
      localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        localStorage.setItem("scopes", JSON.stringify(scopes)); // <--
        /*
        *   We're storing expires_at & scopes in local storage for convenience.
        *   This way, we don't have to parse the JWT on the client to use this data for UI-related logic.
        *   The server validates these claims.
        *
        *   /!\ No security issue here because our API calls will receive the access_token
        *       & parse it to determine the user's authorization.
        *
        */
    };
}
```
```js
{
  logout = () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("scopes"); // <--
  
      this.userProfile = null;
  
      this.auth0.logout({
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        returnTo: "http://localhost:3000"
      });
    };
}
```
```js
{
  userHasScopes (scopes) {
    const grantedScopes = (
      JSON.parse(localStorage.getItem("scopes")) || ""
    ).split(" ");
    return scopes.every(scope => grantedScopes.includes(scope));
  }
}
```

### Check scopes in Express
In `server.js`:
```js
const checkScope = require('express-jwt-authz'); // Validate JWT scopes
// ...
app.get("/courses", checkJwt, checkScope(["read:courses"]), function(req, res) {
  res.json({
    courses: [
      {id: 1, title: "Building Apps with React and Redux"},
      {id: 2, title: "Creating reusable React Components"},
    ]
    /*
    *   In real world, it would read the sub(subscriber ID) from the access token
    *   and use it to query the DB for the author's courses.
    */
  });
});
```

### Create React Page that validates scopes
In `src/Courses.js`:
```js
import React, {Component} from 'react';

class Courses extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    fetch('/course', {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    }).then(response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not OK');
    })
      .then(response => this.setState({courses: response.courses}))
      .catch(error => this.setState({message: error.message}))
  }

  render() {
    return (
      <ul>
        {this.state.courses.map(course => {
          return <li key={course.id}>{course.title}</li>
        })}
      </ul>
    );
  }
}

export default Courses;
```

In `App.js`:
```js
    <Route
        path="/courses"
        render={(props) =>
          // checks are for user experience only, not security
          // /!\ Never trust the user /!\
          // the server validates the user authorization on API calls
          this.auth.isAuthenticated() &&
            this.auth.userHasScopes(["read:courses"
            ])? (
            <Courses auth={this.auth} {...props} />
          ) : (
            this.auth.login()
          )
        }
    />
```

In `Nav.js`:
```js
  {isAuthenticated() && (
      <li>
        <Link to="/private">Private</Link>
      </li>
    )}
    {isAuthenticated() &&
      userHasScopes(["read:courses"]) &&
    (
      <li>
        <Link to="/courses">Courses</Link>
      </li>
    )}
```

### Apply role via an Auth0 rule
auth0.com > rules > create rule > Pick a rule template :
    Rules are written in JS & they run as part of the authentication process
    auth0 allows us to customize the authentication pipeline's behavior
    -
    There is a lot of templates ! => Force email verification / Multi-factor...
    -
    > Set role to a user (Not very scalable. We can look at other rules that allow us to call out our own DB to store this data)
    -
    [More info on rules](auth0.comdocs/rules/current)
    -
    To test a rule : `Try this rule` = debug
    + we can add console logs in the rule
    + we can install real-time logs
        (where we can re-order/test all our rules => try all rules with... [select an identity provider])
        > Extensions > real-time webtask logs
        > rules > edit selected rule > debug rule cF Real-time webtask logs screenshot 
        /!\ WARNING : debugging rules changes real data in the tenant => user details > app_metadata (read-only for user)
        user_metadata user (specific data) can be changed by the user (color preference, blog url...)        

What about applying the newly created rule on an API endpoint :
/!\ We have to add the Role claim (which is a custom claim, and present in the ID) to the access token
auth0.com > rules > create rule :
Pick a rule template :
    Empty rule > Tell auth0 that each time a user logs in, we add the custom claim to the access token
```js
function (user, context, callback) {
  if(user.app_metadata && user.app_metadata.roles) {
    context.accessToken['http://localhost:3000/roles'] = user.app_metadata.roles;
  }
  callback(null, user, context);
}
```

In `server.js` :
```js
function checkRole(role) {
  return function (req, res, next) {
    const assignedRoles = req.user["http://localhost:3000/roles"];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      return next();
    }
    return res.status(401).send("Insufficient role");
  }
}

app.get('/admin', checkJwt, checkRole("admin"), function (req, res) {
  res.json({
    message: "Hello from an admin private API !"
  })
});
```

In `Courses.js` :
```js
componentDidMount() {
fetch('/course', {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    }).then(response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not OK');
    })
      .then(response => this.setState({courses: response.courses}))
      .catch(error => this.setState({message: error.message}));
    
    fetch('/admin', {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    }).then(response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not OK');
    })
      .then(response => console.log(response))
      .catch(error => this.setState({message: error.message}));
}
```

### Compare authorization approaches
Session Cookie
=> elkjfmzfjkfhnelzkjeflnkejhf=p53S...
    + Simple
    + Secure (w/ http-only cookies over https)
    - Not an identifier : it handles authentication but no authorization data included
        => Like an ID that you carry around
    - Performance : It's up to the server to check for authorization on every single call
        DB queries required to lookup the user's rights on every call
        /!\ This downside can be mitigated by storing user sessions in an in-memory cache to avoid tha DB call overhead

JWT with Scopes
=> edit:user
    /!\ Scopes were designed to specify what an app is allowed to do with a third party on a user's behalf
        BUT over time, people have tried to use custom scopes to handle general authorization within their app
        AND auth0 does support this
    -    
        + Performance : JWTs are cryptographically secure SO we can trust the scopes provided within the user's access token.
            Avoiding DB call to check on a user'sright for each API call
        - Bloated JWTs (w/ 12s of scopes) > works for simple apps > avoid w/ e-commerce site
        - scope alone doesn't convey the user's exact rights
        
JWT w/ Roles
=> role:admin
    + Simple : Roles group users by permissions. Different permissions to each role
        /!\ + We can include role information within our access tokens
        Single line to check
    + Scalable : A single role encapsulates a long list of permissions
    + Fast : Roles are specified in a JWT we ca trust since it's cryptographically secured
        -> No need to call a DB
        = Abstraction layer of scopes
    + More maintainable : No need to modify code
    
## Customization and Enhancements
### React Enhancements
1) Redirect to previous page after login
    Store current location in localStorage
    In `Auth.js` :
```js
    // after imports
    const REDIRECT_ON_LOGIN = "redirect_on_login";
        
      login = () => {
        console.log('>>> this.history.location = ');
        console.table(this.history.location);
          localStorage.setItem(
          REDIRECT_ON_LOGIN,
          JSON.stringify(this.history.location)
        );
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
            const redirectLocation =
              localStorage.getItem(REDIRECT_ON_LOGIN) === "undefined"
                ? "/"
                : JSON.parse(localStorage.getItem(REDIRECT_ON_LOGIN));
              // This ternary is just a safety check
            this.history.push(redirectLocation); // programmatically tells React Router to redirect to Home
          }
          localStorage.removeItem(REDIRECT_ON_LOGIN);
        });
      };

```

2) Create PrivateRoute component
In `src/PrivateRoute.js`, we centralise our logic for private routes :
```js
import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ component: Component, auth, scopes, ...rest }){
  // component: Component = Aliasing the component to semantically use it correctly below
  return (
    <Route
      {...rest}
      render={ props => {
        // 1) Redirect to login if not logged in
        if(!auth.isAuthenticated()) return auth.login;

        // 2a) Display message if user lacks required scope(s)
        if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          return (
            <h1>
              Unauthorized - You need the following scope(s) to view this page :{" "}
              { scopes.join(", ") }.
            </h1>
          )
        }

        // 2b) We could enhance this component by validating roles as well

        // 3) Render component
        return <Component auth={auth} {...props} />
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  // any because .object is deprecated, see .shape / .exact docs below
  auth: PropTypes.any.isRequired,
  scopes: PropTypes.array
};

PrivateRoute.defaultProps = {
  scopes: []
};

export default PrivateRoute;
```
[.shape / .exact](https://www.npmjs.com/package/prop-types)

In `App.js` :
```js
render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
          <PrivateRoute
            path="/profile"
            component={ Profile }
            auth={this.auth}
          />
          <Route path="/public" component={Public} />
          <PrivateRoute
            path="/private"
            component={ Private }
            auth={this.auth}
          />
          <PrivateRoute
            path="/courses"
            component={ Courses }
            auth={this.auth}
            scopes={["read:courses"]}
          />
        </div>
      </>
    );
  }
```

3) Share auth object via React's context
Redux
    + Powerful & popular
    - Lots of moving parts
--> cF [Cory House course, Building apps w/ React and Redux](https://app.pluralsight.com/library/courses/react-redux-react-router-es6)

Context
    + Simple
    + Built into React (from the beginning but considered unstable  and not recommended for years)
        /!\ This has changed w/ React 16.3 when they added the new ContextAPI (hooks added in 16.8)
    + Apps can have multiplpe contexts
        /!\ It's recommended to place related data in the same context
    ---
    To configure context :
        1. Declare context, in `src/AuthContext.js` :
```js
    import React from 'react';
    
    const AuthContext = new React.createContext();
    
    export default AuthContext;
```
---
        2. Declare provider (provides data / funcs)
        Typically, the provider is declared near the app's entry point
        so all child components can consume the data and functions it provides.
            In `App.js` :
```js
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          auth: new Auth(this.props.history)
        };
      }
      render() {
        const { auth } = this.state;
        return (
          <AuthContext.Provider value={auth}>
            <Nav auth={auth} />
            <div className="body">
              <!-- Possible enhancement = PublicRoute -->
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} />}
              />
              <Route
                path="/callback"
                render={(props) => <Callback {...props} />}
              />
              <PrivateRoute
                path="/profile"
                component={ Profile }
              />
              <Route path="/public" component={Public} />
              <PrivateRoute
                path="/private"
                component={ Private }
              />
              <PrivateRoute
                path="/courses"
                component={ Courses }
               
                scopes={["read:courses"]}
              />
            </div>
          </AuthContext.Provider>
        );
      }
    }
```
        
        3. Declare consumer (consumes data / funcs)
        In `PrivateRoute.js` :
```js
import AuthContext from "./AuthContext";

function PrivateRoute({ component: Component, scopes, ...rest }) {
  // component: Component = Aliasing the component to semantically use it correctly below
  return (
    <AuthContext.Consumer>
      <!--
        Context consumers expect us to declare a render prop and pass us whatever data
        was passed on value from the provider.
        Here, Route becomes the render prop of our consumer through function as a child*
      -->
      {(auth) => (
        <Route
          {...rest}
          render={(props) => {
            // 1) Redirect to login if not logged in
            if (!auth.isAuthenticated()) return auth.login;

            // 2a) Display message if user lacks required scope(s)
            if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
              return (
                <h1>
                  Unauthorized - You need the following scope(s) to view this
                  page : {scopes.join(", ")}.
                </h1>
              );
            }

            // 2b) We could enhance this component by validating roles as well

            // 3) Render component
            return <Component auth={auth} {...props} />;
          }}
        />
      )}
    </AuthContext.Consumer>
  );
}
```
/!\ Context.Consumer is to use in functional component
[More information on Context.Consumer](https://en.reactjs.org/docs/context.html#contextconsumer)
*function as a child : prop whose value is a function
[More information on function as a child, render props](https://en.reactjs.org/docs/render-props.html)

/!\ Other context syntax can be considered :
    1) Convert to class and declare contextType
    2) Use React Hook [useContext](https://en.reactjs.org/docs/hooks-reference.html#usecontext)
        /!\ [react hooks linter plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
        /!\ Hooks are a new addition in React 16.8. They let you use state
            and other React features without writing a class.
        [Hooks API reference](https://en.reactjs.org/docs/hooks-reference.html)

4) Store tokens in memory
Until this point, we've only used the localStorage for simplicity
    /!\ When using the implicit flow, it's recommended to store the tokens in memory
        to reduce the attack vector for a cross-site scripting attack.
    In `Auth.js` :
```js
const REDIRECT_ON_LOGIN = "redirect_on_login";

// Stored outside class since private
// eslint-disable-next-line
let _idToken = null;
let _accessToken = null;
let _scopes = null;
let _expiresAt = null;
// /!\ underscore convention to convey intent of privacy but still public
```
[More info on JS naming convention](https://www.robinwieruch.de/javascript-naming-conventions)

```js
// Use of the "private fields"
etSession = (authResult) => {
    // Set the expiration tome of the access token for local storage
    _expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    // If there is a value on the `scope` param from the authResult,
    // use it to set scopes in the session for the user. Otherwise
    // use the scopes as requested. If no scopes were requested,
    // set it to nothing
    _scopes = authResult.scope || this.requestedScopes || "";

    _accessToken = authResult.accessToken;
    _idToken = authResult.idToken;
  };

  isAuthenticated = () => {
    return new Date().getTime() < _expiresAt;
  };

  // ...

  getAccessToken = () => {
    if (!_accessToken) {
      throw new Error("No access token found");
    }
    return _accessToken;
  };

  // ...

  userHasScopes(scopes) {
    const grantedScopes = (_scopes || "").split(" ");
    return scopes.every((scope) => grantedScopes.includes(scope));
  }
```

/!\ If the app was running and we were still logged in,
    let's manually delete items in local storage in browser > Application > Local Storage > local URL

/!\ Since our tokens are in memory, my session doesn't persist across tabs ! Inconvenient, solution = Silent auth and token renewal

5) Silent auth and token renewal
By default, Auth0 JWTs expire in 10 hours (36000 seconds) on application settings page
Silent Authentication :
HTTP call to tenantDomain/authorize?params
```dotenv
https://reactjs-goumies-dev.eu.auth0.com/authorize?
    client_id=secret
    &
    response_type=token%20id_token
    &
    redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback
    &
    scope=openid%20profile%20email%20read%3Acourses
    &
    audience=ttp%3A%2F%2Flocalhost%3A3001
    &
    state=0F_pNqbYtYk-G49zJqDiyGt6P-9Q4ZAC
    &
    nonce=3XJODZJaLCJJulDT9qmx3`TILD``7XNKiJxrd
    &
    response_mode=web_message
    &
    prompt=none
    &
    auth0Client=secret
```

In `Auth.js`:
```js
renewToken(cb) {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(`Error: ${err.error} -  ${err.error_description}`)
      }
      this.setSession(result);
      // Callback called after the response has been received
      if(cb) cb(err, result);
    });
}
/*
*     /!\
*     this.auth0.checkSession(to specify audience and scope BUT can be omitted
*      because it defaults to the audience declared in our Auth object, (err, result) => {
*/
}
```

In `App.js`:
```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false
    };
  }

  componentDidMount() {
    this.state.auth.renewToken(() => {
      this.setState({tokenRenewalComplete: true })
    });
  }

  render() {
    const { auth } = this.state;
    // Show loading message until the token renewal is completed
    if(!this.state.tokenRenewalComplete) return "Loading...";
    return (
      // ...
    );
  }
}
```

+ Auth0.com > Apps > react-auth0-pluralsight settings > Allowed web origin : http://localhost:3000

In `PrivateRoute.js` :
```js
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  scopes: PropTypes.array,
};
```
/!\ Perf tweak: We could write a value to localStorage when the user logs in
    and clear it when the user logs out to avoid needlessly making this call.

Caveats :
    - Setting up a third party cookie via an iFrame ! Safari blocks them by default.
    /!\ To resolve, set up a custom Auth0 domain.
    - Any login w/ Google attempts will fail : On refresh, the user is considered as logged out
    /!\ Silent auth doesn't work w/ identity provider by default.
        We need to configure our own keys w/ each provider.
        [auth0 > connections > social]
        Before going to production, we need to configure
            our identity provider keys anyway(topic not covered in this course).
            --> The default Google config that we've used throughout this course is configured
                with the development key from Auth0 that you will need to replace before publishing
                our app to production.
                
Silent token renewal :
This way our app can request new tokens automatically when our current tokens expire.
In `Auth.js` :
```js
// his will call renewToken when our token expires.
scheduleTokenRenewal() {
    const delay = _expiresAt - Date.now();
    if (delay > 0) setTimeout(() => this.renewToken(), delay);
}
```
When the user is authenticated, in `Auth.js` :
we should call scheduleTokenRenewal()
```js
setSession = (authResult) => {
    // Set the expiration tome of the access token for local storage
    _expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    // If there is a value on the `scope` param from the authResult,
    // use it to set scopes in the session for the user. Otherwise
    // use the scopes as requested. If no scopes were requested,
    // set it to nothing
    _scopes = authResult.scope || this.requestedScopes || "";

    _accessToken = authResult.accessToken;
    _idToken = authResult.idToken;
    this.scheduleTokenRenewal();
  };
```
This will ask Auth0 for a new token when our current token expires.
So, this will keep the user logged in while the tab is open until their Auth0 session actually expires.

### Auth0 customizations
auth0.com > SSO integrations
= popular third part

1) Identity providers
auth0.com > Connections > Social

2) Custom login and signup
auth0.com > Connections > DB > Settings
We can specify user name and password  policy (cF Databases Connections captures)

auth0.com > Connections > DB > Password Policy

auth0.com > Connections > Enterprise
    = users can log using enterprise credentials
    
auth0.com > Connections > Passwordless
    = one-time code by SMS / Email, on each login, fully cutomizable

Multifactor Auth With Guardian
    = push notifications / SMS
    
Hosted Pages
 = Login / Password reset / Guardian Multifactor pages customization

Embedded Login

3) Emails
auth0.com > Emails > Templates
    = Email templates fir various events
auth0.com > Emails > Provider
    = Select the provider that will send those emails

4) Database integration
auth0.com > Connections > DB > Custom DB

---
auth0.com > Logs
Auth0 provides detailed logs of actions performed in the Dashboard and authentication by users

auth0.com > Anomaly Detection 
= brute-force protection (enabled by default) to limit the number of signups and failed logins
from a given IP address
---

5) Hooks
auth0.com > Hooks
Customize auth0 behaviour w/ nodeJS
During Client Credentials / Pre User Registration / Post User Registration

6) Extensions
auth0.com > Extensions
    = custom social connections, sending logs to Logstash or Azure, GitHub, GitLab, or GitBucket deployments
    and a powerful authorization extension that adds granular support for groups, roles, and permissions.

