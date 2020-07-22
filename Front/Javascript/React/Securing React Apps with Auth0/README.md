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
