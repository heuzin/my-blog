import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../helpers/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'PATCH') return;

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
    }

    const id = req.body.id;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const docId = new ObjectId(id);

    await usersCollection.updateOne(
        { _id: docId },
        {
            $push: {
                favorites: 'Testing',
            },
        },
    );

    client.close();
    res.status(201).json({ message: 'Post added to fovorites.' });
};

export default handler;
