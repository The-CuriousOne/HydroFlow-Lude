import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Call your login API endpoint. Make sure that NEXTAUTH_URL is set in your environment.
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        const data = await res.json();

        // If the response is successful and contains a user, return the user object.
        if (res.ok && data.user) {
          return data.user;
        }
        // If something went wrong, throw an error.
        throw new Error(data.error || "Login failed");
      },
    }),
  ],
  session: {
    // Use JWT-based sessions
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // If a user object is returned on sign in, add data to the token.
      if (user) {
        token.username = user.username;
        token.id = user._id || user.id; // adjust depending on your user object structure
      }
      return token;
    },
    async session({ session, token }) {
      // Make the token data available in the session object.
      session.user = {
        username: token.username,
        id: token.id,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // ensure you have this set in your .env file
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
