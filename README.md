# Spotify Authorization Backend

This repository contains the backend for an application that integrates with Spotify to fetch and display user statistics, such as the most listened-to artists, most played songs, and other insights. The backend handles authorization with Spotify and provides endpoints to retrieve user-specific data.

## Features

- **Spotify Authorization**: Implements Spotify's OAuth 2.0 flow to authenticate users and obtain access tokens.
- **Fetch User Statistics**: Retrieves data such as top artists, most played tracks, and listening history.
- **Secure Token Management**: Safely handles and refreshes Spotify access tokens.
- **RESTful API**: Provides a structured API for the frontend to interact with Spotify's data.

## Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Spotify Developer Account](https://developer.spotify.com/) with a registered application

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/spotify-auth-backend.git
cd spotify-auth-backend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and configure it with your Spotify app credentials:

```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 4. Run the Server
Start the backend server:
```bash
npm run start
# or
yarn start
```

The server will run at `http://localhost:3000`.

## API Endpoints

### Authorization

#### `GET /login`
Redirects users to Spotify's login page to initiate the authorization process.

#### `GET /callback`
Handles Spotify's redirect after user authorization and exchanges the authorization code for access tokens.

## Folder Structure

```
spotify-auth-backend/
├── src/
│   ├── routes/   # API endpoint controllers
│   ├── services/      # Business logic for Spotify integration
│   ├── utils/         # Helper functions (e.g., token management)
│   └── index.js         # Express application setup
├── .env.example       # Example environment variables
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Notes

- Ensure your Spotify application has the correct redirect URI configured in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
- Access tokens expire after a short period; implement the `/refresh-token` endpoint to handle token refresh.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)