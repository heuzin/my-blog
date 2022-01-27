import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import UserProfile from '../../components/userProfile/UserProfile';
import { connectToDatabase } from '../../helpers/db';
import { getFilteredPosts } from '../../helpers/postsUtils';
import { User } from '../../modals/User';

type Props = {
    user: User;
};

const ProfilePage: React.FC<Props> = ({ user }) => {
    return <UserProfile user={user} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }

    const userEmail = session.user?.email;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = await usersCollection.findOne({ email: userEmail });

    const favorites = getFilteredPosts(user?.favorites);

    return {
        props: {
            user: {
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.email,
                isAdmin: user?.isAdmin,
                favorites,
            },
        },
    };
};

export default ProfilePage;
