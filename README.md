This is a Vue.js application that leverages Vue Router for navigation and Bootstrap for UI components. The application includes three main routes accessible from the header: Home, Users, and Posts.

## Table of Contents

. Features
. Technologies Used
. Getting Started
. Users
. Posts

## Features

- Vue.js for building dynamic and reactive user interfaces.
- Bootstrap for a responsive and modern UI design.
- Vue Router for smooth navigation and routing.
- Axios for making HTTP requests to a fake API.
- Fetch and display user data and posts from the fake API.
- Create, edit, and view individual posts.

## Technologies Used

- Vue.js
- Bootstrap
- Vue Router
- Axios

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/famahmoudi64/post-app.git`
2. Navigate to the project directory: `cd post-app`
3. Install dependencies: `npm install`
4. Run the development server: `npm run serve`
5. Open your browser and visit `http://localhost:8080`

### Users

Navigate to the Users route to view user data retrieved from the fake API. Users are displayed, and you can select an individual user to view more details by navigating to `users/:id`. The data is fetched using Axios.

### Posts

Visit the Posts route to see a list of posts fetched from the fake API. You can click on the "Create Post" button to create a new post. Additionally, you can select individual posts to view, edit, and update. The communication with the server is handled using Axios.
