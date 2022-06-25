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

### User Guide
The user shall enter the text editor through Heroku app link. The user shall write his name and id of the document he wants to connect before start editing then clicks login button if the id is available. He shall clicks create new document button if he wants to connect to a blank page. The system will generates a message saying "You are now editing document (id)". Then the user shall write and edit as much as he can, as well as, create new document and login buttons become unclickable. Once the user needs to disconnect from the document, he shall click Logout button.

### Demo Video for testing the application
https://drive.google.com/drive/folders/1NFKtVKAQTAVFMNvDDys7vR6lnUImqLKc 
