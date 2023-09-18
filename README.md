# PhotoLabs

PhotoLabs is a straightforward stock photo application. Using React on the frontend, it leverages a pre-existing API to enable users to view and interact with various photos within a range of different contexts.\
Built as a single page application (SPA) with a seamless user experience in mind, our eye-catching photos are stored in the database, so even after a browser refresh or session restart, they'll still be available to enjoy and explore.

## Final Product

**View Multiple Photos:**  

!["View of Multiple photos in the Animals category"](/docs/homepage_all_photos_screenshot.jpg)

**Closer View of Single Photo:**  

!["Closer View of Single Photo"](/docs/single_photo_modal_screenshot.jpg)

## Purpose

This project was created by [me](https://github.com/kazvee) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program)

## Features

🏡 Homepage / View All Photos\
Offers a view of all available photos and a top menu for ease of navigation

📚 Photo Categories / Topics\
Click on the various top menu options to browse through different photo categories

🔎 Take a Closer Look\
Click on a photo to view a larger version and discover relevant/similar photos

🤩 Favorites / Likes\
Show your appreciation by clicking the heart icon to favorite/like a photo

💖 Notifications\
Keep track of all your favourites with the heart icon notification feature built into the navigation menu
  
## Bonus Features (Built as Project Stretch Goals)

🏠 Return to Homepage\
Click the PhotoLabs title on the top menu to return to the homepage to view all photos

🔃 Refresh All Photos\
On title click, photos are re-fetched from the database, enabling you to explore any latest additions

😍 View All Favourites / Likes\
Click the heart icon in the navigation menu to view all favourited photos\
If clicked within a category, only the favourites belonging to that specific category will display\
If clicked from the homepage, all favourites across all categories will display

🎨 Enhanced Styling\
Cursor animation on clickable menu options offers intuitive visual feedback, inviting users to explore and interact\
Extra finishing touches, in muted tones, added to the client interface, enabling the main visual content to shine through

## Dependencies

- [React](https://react.dev/)
- [Express](https://expressjs.com)
- [node-postgres](https://node-postgres.com/)
- [Babel](https://babeljs.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## A note about `create-react-app`

For larger, production-ready applications, React's official documentation and best practices now recommend other ways to [Start a New React Project](https://react.dev/learn/start-a-new-react-project)\
Since this was a project for learning purposes only, it has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app)\
With no plans to scale this project out, or add further customisation, create-react-app provided a simple way to quickly get a functional React app up and running

## Installation

### Getting Started

- Fork this repository to your own Github account
- Clone your fork onto your local device

### Set up Frontend & Backend

- Install all dependencies with `npm i` (or `npm install`, if you prefer typing more) in the `/frontend` and the `/backend` folders

### Set Up Database

- In a terminal window, connect to your PostgreSQL environment using the `psql` command and your login credentials
  - In some environments, the `startpostgres` command may need to be run beforehand
- Create a new database using the `CREATE DATABASE photolabs_development;` command, where 'photolabs_development' is the name you want to call this new DB
- Connect to the new database with the `\c photolabs_development` command, where 'photolabs_development' is whichever name you chose for your new DB in the the previous step

### Add Database Credentials to dotenv File (`.env`) 

- Using the provided `.env.example` file as a template, create a new file named `.env.development` in the same folder.
- Add your database name, username, and password
  - Note: If running the app locally, the `PGHOST` would be `localhost`, and for PostgreSQL the `PGPORT` will usually be `5432`
  - For security reasons, the `.env.development` file has been added to the `.gitignore` file, so these sensitive details will not accidentally be published to GitHub

### Seed the Database

- Navigate to the `/backend` folder in your terminal and run the development server using the `npm start` command
- Then, either:
  - Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset` in your terminal\
  OR
  - Use the browser to navigate to `http://localhost:8001/api/debug/reset`

### Start the App

- Connect to the database server from the root folder by using the `psql` command and your database credentials 
- Start the backend by running the `npm start` command from within the `/backend` folder. The API server will run on Port 8001
- Start the frontend side using the `npm start` command from within the `/frontend` folder. The client will run on Port 3000
- Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser
- Start exploring our lovely photos! 🤩