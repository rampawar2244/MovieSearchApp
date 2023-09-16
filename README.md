MERN Movie Search and Favorites App
This is a simple web application built using the MERN (MongoDB, Express, React, Node.js) stack that allows users to search for movies using the OMDB API and save their favorite movies.

Features
Search Movies: Users can search for movies by entering a movie title in the search bar. The app uses the OMDB API to fetch movie data based on the search query.

Add/Remove Favorites: Users can mark movies as favorites by clicking on the heart icon on each movie card. Favorites are stored on the server-side without requiring user registration or login.

Technologies Used
Frontend: React
Backend: Node.js, Express
Database: MongoDB (for storing favorites)
External API: OMDB API for movie data
Installation and Usage
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the server directory and install server dependencies:

bash
Copy code
cd server
npm install
Start the server:

bash
Copy code
npm start
Navigate to the client directory and install client dependencies:

bash
Copy code
cd client
npm install
Start the client:

bash
Copy code
npm start
Open your web browser and visit http://localhost:3000 to access the application.

API Key
To make API requests to the OMDB API, you need to obtain an API key from OMDB API. Once you have the API key, replace the placeholder in the server code with your key.

Folder Structure
client: Contains the React frontend code.
server: Contains the Node.js and Express backend code.
Deployment
You can deploy this application on any cloud platform of your choice (e.g., Heroku, AWS, etc.) for testing and production use.

Contributing
Contributions are welcome! If you have any suggestions or improvements, please create a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
