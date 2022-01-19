import { User } from '../../modals/User';
import ProfileForm from '../profileForm/ProfileForm';
import classes from './UserProfile.module.css';

type Props = {
    user: User;
};

const UserProfile: React.FC<Props> = ({ user }) => {
    const { firstName, lastName, email, favorites } = user;
    const changePasswordHandler = async (passwordData: any) => {
        const response = await fetch('/api/user/change-password', {
            method: 'PATCH',
            body: JSON.stringify(passwordData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
    };

    return (
        <section>
            <h1 className={classes.title}>Your User Profile</h1>
            <div className={classes.container}>
                <div>
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" defaultValue={firstName} />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" defaultValue={lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" defaultValue={email} />
                    </div>
                </div>
                <div>
                    <ProfileForm onChangePassword={changePasswordHandler} />
                </div>
            </div>
            {favorites.length > 0 ? <p>favorites</p> : <p>No favorites</p>}
        </section>
    );
};

export default UserProfile;
