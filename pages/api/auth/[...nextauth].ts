// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// ... (declare module unchanged) ...
declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}


export default NextAuth({
    providers: [
        // Google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // GitHub
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        // Credentials provider for email + password authentication
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" },
            },
            // FIX: Change 'req' to '_req' as it's unused
            async authorize(credentials, _req) {
                // Replace this dummy logic with your actual authentication logic
                // For example, you might fetch the user from your database
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                // Dummy check for demonstration purposes
                if (email === "test@example.com" && password === "password") {
                    return { id: "1", name: "Test User", email: "test@example.com", image: null };
                }
                // Return null if user data could not be retrieved or the credentials are invalid
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            // Ensure session.user exists before assigning
            if (session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
});