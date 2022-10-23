# Mercedes UI Coding Challenge
## Assumptions made
The following assumptions were made by me during the implementation of the given task:
- don't restrict the api to just return images of specific sizes. In the picture in the task it looks like part of the task is to handle images of different sizes and display them in a visually appealing way. That's why I don't use the features of the api that allow to crop the returned images to a specific size. This also means that the loading times can be high since I'm loading images in original quality.
- use the *author* field of the image metadata as a caption for the image. That's the only useful text that I can find for each image
- The requirement that the first letter of each word of the images caption is small and the others are capital is not a typo in the requirements.
- It should be possible to load more images by clicking a button at the end of the list. Alternatively it would be possible to implement a scrollspy which automatically triggers a reload when the user scrolls near the end of the page
- I assume that it's okay to use the masonry library to layout the pictures. Doing this on my own is not that hard but costs time that I don't have right now and I can't see an advantage in an own implementation.
- I am aware that in the specific scenario I could utilize the size information provided by the api to layout the pictures. But since in many real life scenarios this information is not available I decided to not use the size information provided by the api
- since I'm on vacation right now and the internet is not that good I unfortunatelly have to do a minimal implementation of the whole task.

## Installation & running
- `node` and `npm` have to be installed
- clone the github repositiory
- in the root of the repository run `npm i` to install the dependencies
- to run the project in development mode use `npm start` which will be default start a local server on `localhost:3000` and automatically open this url in the browser
- a production build can be done by `npm run build` which will output the final code into the `build` folder


The project was bootstrapped with `create-react-app`. During this bootstrapping the following readme was created:
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
