import querystring from 'node:querystring';


import dotenv from 'dotenv';
dotenv.config();

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";

export const Login = async (req, res) => {
  try {
    const scopes = [
      "user-read-private",
      "user-read-email",
      "playlist-read-private",
      "user-top-read",
      "user-read-recently-played",
      "playlist-read-collaborative",
      "user-library-read",
    ];

    const query = querystring.stringify({
      response_type: "code",
      client_id: process.env.SPOTIFY_CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI,
      scope: scopes.join(" "),
    });

    res.writeHead(302, { Location: `${SPOTIFY_AUTH_URL}?${query}` });
    res.end();
  } catch (error) {
    console.error("Error en el login de Spotify:", error);
    res.status(500).send("Error.");
  }
};