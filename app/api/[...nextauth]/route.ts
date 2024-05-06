import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/app/_lib/prisma';
import { Adapter } from 'next-auth/adapters';

const handler = NextAuth({
	adapter: PrismaAdapter(db) as Adapter,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SERVER as string,
		}),
	],
});

export { handler as Get, handler as POST };
