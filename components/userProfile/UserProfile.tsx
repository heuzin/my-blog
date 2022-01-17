import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import ProfileForm from '../profileForm/ProfileForm';

const UserProfile = () => {
    const changePasswordHandler = async (passwordData: any) => {
        const response = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        console.log(data);
    };

    useEffect(() => {
        const getUserProfile = async () => {
            const response = await fetch('/api/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            console.log(data);
        };
        getUserProfile();
    }, []);

    return (
        <section>
            <h1>Your User Profile</h1>
            <ProfileForm onChangePassword={changePasswordHandler} />
        </section>
    );
};

export default UserProfile;
