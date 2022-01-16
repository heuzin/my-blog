import type { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../../helpers/auth';
import { connectToDatabase } from '../../../helpers/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return;
    }

    const data = req.body;
    const { email, password } = data;

    if (!email || !email.includes('@') || !password || password.trim().length < 7) {
        res.status(422).json({ message: 'Invalid input - password should include at least 7 characters' });
        return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
        res.status(422).json({ message: 'User already exists!' });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = db.collection('users').insertOne({ email, password: hashedPassword });

    res.status(201).json({ message: 'Created user!' });
    client.close();
};

export default handler;
