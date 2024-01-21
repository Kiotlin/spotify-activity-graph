import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login"
  },
  providers: [
    SpotifyProvider({
      clientId: String(process.env.SPOTIFY_CLIENT_ID),
      clientSecret: String(process.env.SPOTIFY_CLIENT_SECRET),
      authorization: {
        params: {
          scope: "user-read-recently-played",
          redirect_uri: "http://localhost:3000/api/auth/callback/spotify"
        }
      },
      profile: (profile, tokens) => {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0].url,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token
        };
      }
    })
  ],
  callbacks: {}
};
