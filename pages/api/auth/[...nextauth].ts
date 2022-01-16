import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../helpers/auth';
import { connectToDatabase } from '../../../helpers/db';

export default NextAuth({
    secret: process.env.next_secret,
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials, req) {
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({ email: credentials?.email });

                if (!user) {
                    client.close();
                    throw new Error('No user Found!');
                }

                const isValid = await verifyPassword(credentials?.password!, user.password);

                if (!isValid) {
                    client.close();
                    throw new Error('Invalid email or password.');
                }

                client.close();
                return user;
            },
        }),
    ],
});
