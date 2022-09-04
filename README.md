# Code Challenge
Json Server is used to exchange data to/from a web server. I used Json Server to demostrate the data fetching Using "Fetch" with Async and Await to make network requests to the server and load new information.

I have used NPM package "react paginate" to achieve Pagnination. Used Bootstrap 5 and CSS 3 for styling the UI components. 

Rather Loading everything on Page load, i Just loaded the Initial 8 contents that arre required to be shown On the UI. As the User clicks next on Paginantion or Increases number of items per page, the data get loaded andd displayed on UI.

I have used Jest Snapshot testing to test the UI components.

## Available Scripts
Before running the below Script , 
Please Install Json Server using : 
### `npm i -g json-server`

Keep the ProductsData.json file parallel to Code file. 
Run this in seperate terminal
### `json-server --watch productsData.json --port 4000`

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


