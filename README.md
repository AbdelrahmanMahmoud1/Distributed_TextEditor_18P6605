# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Distributed Computing Project 
### Team 1 Members

1. Abdelrahman Mahmoud Abdelrahman 18P6605
2. Ahmad Ossama Ahmad 18P6575
3. Shehab Mohamed Ibrahim 18P7213
4. Yusuf Sameh Fawzi 18P1399

### Text-Editor Files Implementation

This project describes a multi-user text editor that is implemented by JavaScript language through web sockets, socket.io and express libraries.<br /> The project contains of multiple clients (nodes) interacting with a server that is published on Heroku. There are five main JavaScript files: <br />
* Server.js
* App.jsx
* EditBar.jsx
* EditorTextArea.jsx 
* Login.jsx

The first file represents the server while the others represent the client side which written as a React app. The server opens a connection and listens for messages upcoming. Message recieved is then broadcasted to all clients except the sender using emit. Hence, any text written or change appears is sent as data variable and will be displayed on the other clients' windows. File Dependencies as node modules, packages and pnp files are ignored in the .gitignore file. index.html file includes the format of the text editor including the important buttons that control the document id, password and the styles used in the text. <br />

Render function is used to get the html file through javaScript code using express library. App.jsx contains sendData function that emits the data to the server. ClearMessage is called when a client undoes a specific message. Hence it is cleared to "" and EditorTextArea element is returned to clear the message and exchange it with the new one with specific style used in EditorTextArea.css file.<br />
Login file is used to specify styles of the login button using react bootstraping where this button is clicked when client needs to join a shared document and starts writing after entering correct id to open connection with the server and get access to the document.

