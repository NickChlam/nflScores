# NFL Scores

This project uses a node API running a mongo database with an Angular front end to automate a weekly pickEm game powered by python.  What is the PickEm game you ask? A pickEm is quite simple, you pick the winner of each matchup and submit.  The individual that guesses the highest number of correct matchups wins. 

## Development server

Run `npm start` for a dev server in the api folder. Navigate to `http://localhost:3001/api-docs` to view documentation. The app will automatically reload if you change any of the source files courtesy of nodemon.

Run `ng serve` to locally run the SPA using the angular cli version 6.0.8. you can install angular by running npm install -g @angular/cli@6.0.8 

## Build API

In the API Run `npm install` to build the api project. 

## Install Mongo 
You also must have mongo installed locally on your machine for the database to work.  You can download mongo here: https://www.mongodb.com/download-center/community , or simply look at the Docker build if you do not want to install mongo on your local machine.

## Build SPA 
In the SPA, run npm install. The build artifacts will be stored in the `dist/` directory. Use the `ng build --prod` flag for a new production build. 

## web_scraper
in the web_scraper folder to scrape the current week of games ( only available on tuesdays to thursday everyweek ) run python getGames.py
To get last weeks scores, ( only available tuesday to thursday every week ) run python getScores.py

*** python 3 or greater must be installed along with selenium, chrome driver, and pymongo ***

python can be installed : https://www.python.org/downloads/

selenium can be installed: https://selenium-python.readthedocs.io/installation.html

pymongo can be installed: https://api.mongodb.com/python/current/installation.html

chromedriver can be installed: https://chromedriver.chromium.org/downloads *** make sure to install the version for the chrome version you have ***



## Docker build 
Install docker desktop on your machine and configure it to allow shared drives. You can download Docker Desktop here: https://www.docker.com/products/docker-desktop

move to the root directory of nflScores and run docker-compose build. This will run the docker-compose.yml script and create the necessary containers to run the application. 
To run: in the root directory of the nflScores : docker-compose up OR docker-compose start.  Then browse to `http://localhost:4200` for the SPA and `http://localhost:3001` for the api.

*** to run this in docker the connection strings that refer to mongo will need to be changed from `mongodb://localhost:27017/scores` to `mongodb://mongo:27017/scores`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help with node use node --help or check out the docs at `https://nodejs.org/`

To get more help with docker use docker --help or check out the docs at `https://docs.docker.com/`


