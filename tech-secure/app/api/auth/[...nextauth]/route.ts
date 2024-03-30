import prisma from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				name: { label: "name", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				try {
					if (!credentials?.name || !credentials?.password) {
						throw new Error("name and password are required");
					}

					const user = await prisma.user.findUnique({
						where: {
							name: credentials.name,
						},
					});

					if (!user || !user?.hashedPassword) {
						throw new Error("Invalid credentials");
					}

					const isCorrectPassword = await bcrypt.compare(
						credentials.password,
						user.hashedPassword
					);

					if (!isCorrectPassword) {
						throw new Error("Invalid credentials");
					}

					return user;
				} catch (error) {
					// Log the error for debugging
					console.error("Authorization error:", error);
					// Throw a generic error to prevent leaking sensitive information
					throw new Error("Invalid credentials");
				}
			},
		}),
	],
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
