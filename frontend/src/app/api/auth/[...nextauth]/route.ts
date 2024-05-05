import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL

interface User {
	id?: string;
  name?: string | null;
  email?: string | null;
}

interface Account {
	provider?: string;
}

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
				console.log('エラー', error);
				return false;
			}
		},
	},
});

export { handler as GET, handler as POST };
