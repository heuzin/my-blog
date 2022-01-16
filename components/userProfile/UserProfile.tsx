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
    return (
        <section>
            <h1>Your User Profile</h1>
            <ProfileForm onChangePassword={changePasswordHandler} />
        </section>
    );
};

export default UserProfile;
