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
                clientID: process.env.REACT_APP_AUTH0_CLIENTID,
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