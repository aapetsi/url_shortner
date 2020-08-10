# URL SHORTNER

A fullstack app for shortnening urls. This app was built using the _MEVN (MongoDB, ExpressJs, VueJs and NodeJs)_ stack

#### RUNNING THE APP WITH DOCKER

To spin up a development docker container, from the root of the application run:<br>
`docker-compose up --build`

###### NOTE: YOU NEED TO HAVE DOCKER INSTALLED ON YOUR SYSTEM

##### TO RUN THE FULLSTACK APP LOCALLY

Make sure you are in the server directory of the project and run the following commands:

Change to server directory by running:<br>
`cd server/`

To run the app locally on your machine do the following:

#

Add a `.env` file to the server folder with the following:<br>
```code
MONGO_HOSTNAME=mongo
MONGO_HOSTNAME_TEST=mongo
MONGO_DB=url_shortner
MONGO_DB_TEST=url_shortner_test
MONGO_PORT=27017
```

Install all packages required by the application<br>
`npm install`

Start the application locally on your machine<br>
`npm start`

###### NOTE: You need to have mongodb running locally on your machine

You can optionally run `npm run dev` to have a development server which automatically makes changes when there is a change in the code. This runs both the backend api and the frontend app simultaneously.

The app should start running on `port 3000`. <br>

You can view the application by visiting `http://localhost:8080` in your browser

#

##### TO RUN THE FRONTEND VUE APPLICATION

You can run the frontend application in two ways - either from the server directory of the application or by changing to the vue-client directory and running the start script

1. Running the frontend app from the server directory<br>
   Simply run `npm run client`. This should spin up a developement server on port `1234`. You can then view the app by visiting `http://localhost:8080` in your browser

2. Running the app from the `client` directory<br>
   Change into the client directory `cd client/` and run `npm run serve`. This should spin up a developement server on port `1234`. You can then view the app by visiting `http://localhost:8080` in your browser

To run the test suites for the frontend app:
`npm run test:unit` - runs the tests in watch mode

To run a production build for the frontend app:
`npm run build` - this creates a production app in a build folder located in the client directory

#
