# Facebook Auth

An authentication web application using [Facebook Login for the Web](https://developers.facebook.com/docs/facebook-login/web).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The application state is managed using [Redux](https://redux.js.org/).

## Features include:

-	Home page with Facebook login button.
-	User's profile picture and a short information from users' profile appears after authentication.
-	If web application is closed and afterwards opened, the user is automatically logged in.
-	User can logout after authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

[npm](https://www.npmjs.com/)

After npm is installed, use this to confirm it's installed correctly:

```
npm -v
```

### Installing

Clone the repo into your preferred directory, change directory, and run "npm install".

```
git clone https://github.com/davifantasia/facebookauth.git
cd facebookauth
npm install
```

Run the app using HTTPS protocol (HTTPS is necessary to appropriately use the Facebook API login).

```
set HTTPS=true&&npm start
```

The command above (set HTTPS=true&&npm start) works with Windows cmd.exe only. Check out [Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for other options.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
