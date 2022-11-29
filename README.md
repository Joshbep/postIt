## Project Description
This is a social media clone where users can gather and interact and post about their life. I look to expand on this app and build out more function for the users soon.

## Tech Stack
> Front End:
React
Javascript
CSS

> Backend:
Express
Node
MongoDB

## Models
- User Model
> username: type: string, required: true
email: type: string, required: true
password: type: string, required: true
profilePicture: type: string, required: true
followers: type: array
following: type: array

- Post Model
> userID: type: string, required: true
description: type: string, required: true
photo: type: string, required: true
likes: type: array
comments: [{
text: string,
userID: {type: string, ref: user}
}]

## Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
<img width="449" alt="Screen Shot 2022-11-01 at 5 06 57 PM" src="https://media.git.generalassemb.ly/user/43394/files/77238941-511d-4ed4-bc9c-cf5ac996e488">
<img width="452" alt="Screen Shot 2022-11-01 at 5 04 38 PM" src="https://media.git.generalassemb.ly/user/43394/files/bc0eb46f-17c7-41a5-bc35-535dc9e211f7">
<img width="451" alt="Screen Shot 2022-11-01 at 5 04 52 PM" src="https://media.git.generalassemb.ly/user/43394/files/60698d11-22fa-48ef-9244-df61741d5653">
<img width="452" alt="Screen Shot 2022-11-01 at 5 10 18 PM" src="https://media.git.generalassemb.ly/user/43394/files/ce86a631-b6d9-4340-98df-0494955d4c6f">

## User Stories
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.
> As a user, I want to register or log in to my account
As a user, I want to see all recent posts on the homepage
As a user, I want to be able to create a new post
As a user, I want to be able to delete a new post
As a user, I want to be able to edit a post

### Stretch Goals To Come
> create the ability to follow other users
create the ability to message users
create components for the homepage like recommended friends and online friends

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
