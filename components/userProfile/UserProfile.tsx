import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Fragment, useEffect, useState } from 'react';
import { connectToDatabase } from '../../helpers/db';
import { getFilteredPosts } from '../../helpers/postsUtils';
import { Posts } from '../../modals/Posts';
import { User } from '../../modals/User';
import PostsGrid from '../postsGrid/PostsGrid';
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
        <Fragment>
            <section className={classes.userInfo}>
                <h1>Your User Profile</h1>
                <div className={classes.gripContainer}>
                    <div className={classes.container}>
                        <div className={classes.box}>
                            <p>
                                Name: {firstName} {lastName}
                            </p>
                            <p>Email: {email}</p>
                        </div>
                        <div className={classes.box}>
                            <ProfileForm onChangePassword={changePasswordHandler} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className={classes.favorites}>Favorites</h2>
                {favorites.length > 0 ? (
                    <section className={classes.posts}>
                        <PostsGrid posts={favorites} />
                    </section>
                ) : (
                    <p style={{ textAlign: 'center' }}>No favorites</p>
                )}
            </section>
        </Fragment>
    );
};

export default UserProfile;
