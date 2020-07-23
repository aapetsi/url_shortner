# URL SHORTNER

A fullstack app for shortnening urls. This app was built using the _MERN (MongoDB, ExpressJs, ReactJs and NodeJs)_ stack

##### TO RUN THE FULLSTACK APP

Make sure you are in the root directory of the project and run the following commands:

To run the app locally on your machine do the following:

#

Install all packages required by the application<br>
`npm install`

Start the application locally on your machine<br>
`npm start`

#### NOTE: You need to have mongodb running locally on your machine

You can optionally run `npm run dev` to have a development server which automatically makes changes when there is a change in the code. This runs both the backend api and the frontend app simultaneously.

The app should start running on `port 3000`. <br>

You can view the application by visiting `http://localhost:3000` in your browser

#

##### TO RUN THE FRONTEND REACT APPLICATION

You can run the frontend application in two ways - either from the root of the application or by changing to the client directory and running the start script

1. Running the frontend app from the application root<br>
   Simply run `npm run client`. This should spin up a developement server on port `1234`. You can then view the app by visiting `http://localhost:1234` in your browser

2. Running the app from the `client` directory<br>
   Change into the client directory and run `npm start`. This should spin up a developement server on port `1234`. You can then view the app by visiting `http://localhost:1234` in your browser

To run the test suites for the frontend app:
`npm run test:watch` - runs the tests in watch mode
`npm test` - runs all tests once

To run a production build for the frontend app:
`npm run build` - this creates a production app in a build folder located in the client directory

#

#### RUNNING THE APP WITH DOCKER

To spin up a development docker container run:
`docker-compose up --build`

#### NOTE: YOU NEED TO HAVE DOCKER INSTALLED ON YOUR SYSTEM
