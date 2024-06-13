import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { User, Account } from '@/types/login'

const apiUrl = process.env.NEXT_AUTH_URL

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || ''
		}),
		CredentialsProvider({
			name: 'ゲストユーザー',
			credentials: {
				id: { label: "id", type: "number"},
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "text" }
      },
			async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = {
          id: credentials.id,
          name: credentials.username,
          email: credentials.email,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
			},
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user, account }: { user: User, account: Account | null}) {
			const provider = account?.provider;
			const uid = user?.id;
			const name = user?.name;
			const email = user?.email;
			try {
				const response = await axios.post(
					`${apiUrl}/auth/${provider}/callback`,
					{
						provider,
						uid,
						name,
						email,
					}
				);

				if (response.status === 200) {
					return true;
				} else {
					return false;
				}
			} catch (error) {
				return false;
			}
		},
	},
});

export { handler as GET, handler as POST };
