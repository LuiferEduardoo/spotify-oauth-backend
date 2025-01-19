import querystring from "node:querystring";
import { encode } from "../utils/encode.js";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

import dotenv from 'dotenv';
dotenv.config();

export default async function callback(req, res) {
  const clientAuth = encode(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${clientAuth}`,
    },
    body: querystring.stringify({
      code: req.query.code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
    })
  };

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, options);
    const data = await response.json();

    res.setHeader("Set-Cookie", `access_token=${data.access_token}; Path=/; SameSite=None; Secure; Domain=.spotify.luifereduardoo.com;`);

    res.writeHead(302, { Location: process.env.FRONTEND_URI});
    res.end();
  } catch (error) {
    console.error(error);
  }
}